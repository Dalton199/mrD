const STORAGE_KEY = "fitmeal-planner-state";

const meals = {
  breakfast: [
    {
      name: "Greek yogurt power bowl",
      diet: ["balanced", "vegetarian", "high-protein"],
      ingredients: ["Greek yogurt", "oats", "blueberries", "chia seeds", "honey"],
      steps: "Layer yogurt with oats, berries, chia, and a small drizzle of honey.",
      calories: 420,
      protein: 34,
      carbs: 48,
      fats: 10
    },
    {
      name: "Egg and avocado toast",
      diet: ["balanced", "high-protein"],
      ingredients: ["eggs", "wholegrain bread", "avocado", "tomato", "spinach"],
      steps: "Toast bread, add smashed avocado, cooked eggs, tomato, and spinach.",
      calories: 460,
      protein: 28,
      carbs: 36,
      fats: 22
    },
    {
      name: "Protein oats",
      diet: ["balanced", "vegetarian", "high-protein"],
      ingredients: ["oats", "protein powder", "banana", "cinnamon", "milk"],
      steps: "Cook oats with milk, then stir in protein powder, banana, and cinnamon.",
      calories: 430,
      protein: 32,
      carbs: 55,
      fats: 8
    }
  ],
  lunch: [
    {
      name: "Chicken quinoa bowl",
      diet: ["balanced", "high-protein"],
      ingredients: ["chicken breast", "quinoa", "cucumber", "tomato", "lettuce", "yogurt dressing"],
      steps: "Serve grilled chicken over quinoa with chopped vegetables and yogurt dressing.",
      calories: 540,
      protein: 46,
      carbs: 48,
      fats: 16
    },
    {
      name: "Tuna rice salad",
      diet: ["balanced", "high-protein"],
      ingredients: ["tuna", "brown rice", "corn", "cucumber", "mixed greens", "lemon"],
      steps: "Mix tuna, rice, vegetables, greens, and lemon juice in a bowl.",
      calories: 500,
      protein: 38,
      carbs: 52,
      fats: 14
    },
    {
      name: "Lentil veggie wrap",
      diet: ["balanced", "vegetarian"],
      ingredients: ["wholegrain wrap", "lentils", "hummus", "carrot", "lettuce", "peppers"],
      steps: "Spread hummus on the wrap, add lentils and vegetables, then roll tightly.",
      calories: 480,
      protein: 24,
      carbs: 64,
      fats: 14
    }
  ],
  dinner: [
    {
      name: "Salmon sweet potato plate",
      diet: ["balanced", "high-protein"],
      ingredients: ["salmon", "sweet potato", "broccoli", "olive oil", "lemon"],
      steps: "Bake salmon and sweet potato, steam broccoli, and finish with lemon.",
      calories: 590,
      protein: 42,
      carbs: 46,
      fats: 25
    },
    {
      name: "Turkey mince stir-fry",
      diet: ["balanced", "high-protein"],
      ingredients: ["lean turkey mince", "rice", "mixed vegetables", "soy sauce", "garlic"],
      steps: "Cook turkey with garlic, add vegetables and soy sauce, then serve with rice.",
      calories: 560,
      protein: 44,
      carbs: 54,
      fats: 16
    },
    {
      name: "Tofu noodle bowl",
      diet: ["balanced", "vegetarian"],
      ingredients: ["tofu", "wholewheat noodles", "broccoli", "carrot", "soy sauce", "ginger"],
      steps: "Pan-sear tofu, cook noodles and vegetables, then toss with soy and ginger.",
      calories: 520,
      protein: 30,
      carbs: 58,
      fats: 18
    }
  ],
  snack: [
    {
      name: "Apple peanut protein snack",
      diet: ["balanced", "vegetarian", "high-protein"],
      ingredients: ["apple", "peanut butter", "cottage cheese"],
      steps: "Slice apple and serve with cottage cheese and a small spoon of peanut butter.",
      calories: 260,
      protein: 20,
      carbs: 28,
      fats: 9
    },
    {
      name: "Boiled eggs and fruit",
      diet: ["balanced", "high-protein"],
      ingredients: ["eggs", "orange", "baby carrots"],
      steps: "Pair two boiled eggs with fruit and crunchy carrots.",
      calories: 240,
      protein: 17,
      carbs: 22,
      fats: 10
    },
    {
      name: "Hummus crunch plate",
      diet: ["balanced", "vegetarian"],
      ingredients: ["hummus", "cucumber", "carrot", "wholegrain crackers"],
      steps: "Serve hummus with sliced vegetables and wholegrain crackers.",
      calories: 250,
      protein: 10,
      carbs: 34,
      fats: 9
    }
  ]
};

const defaultState = {
  profile: null,
  plan: [],
  progress: {
    currentWeight: "",
    workoutDone: false
  }
};

let state = loadState();
let deferredInstallPrompt = null;

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

const profileForm = qs("#profileForm");
const progressForm = qs("#progressForm");
const mealList = qs("#mealList");
const groceryList = qs("#groceryList");
const installCard = qs("#installCard");
const installApp = qs("#installApp");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return {
      profile: stored.profile || null,
      plan: Array.isArray(stored.plan) ? stored.plan : [],
      progress: { ...defaultState.progress, ...(stored.progress || {}) }
    };
  } catch {
    return {
      profile: null,
      plan: [],
      progress: { ...defaultState.progress }
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getProfileFromForm() {
  return {
    age: Number(qs("#age").value),
    gender: qs("#gender").value,
    height: Number(qs("#height").value),
    weight: Number(qs("#weight").value),
    goal: Number(qs("#goal").value),
    workouts: Number(qs("#workouts").value),
    activity: Number(qs("#activity").value),
    diet: qs("#diet").value,
    allergies: qs("#allergies").value
      .toLowerCase()
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    mealsPerDay: Number(qs("#mealsPerDay").value)
  };
}

function fillProfileForm() {
  if (!state.profile) return;
  const profile = state.profile;
  qs("#age").value = profile.age;
  qs("#gender").value = profile.gender;
  qs("#height").value = profile.height;
  qs("#weight").value = profile.weight;
  qs("#goal").value = profile.goal;
  qs("#workouts").value = profile.workouts;
  qs("#activity").value = profile.activity;
  qs("#diet").value = profile.diet;
  qs("#allergies").value = profile.allergies.join(", ");
  qs("#mealsPerDay").value = profile.mealsPerDay;
}

function calculateTargets(profile) {
  const baseGender = profile.gender === "male" ? 5 : -161;
  const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + baseGender;
  const maintenance = bmr * profile.activity;
  const deficit = profile.weight > profile.goal ? 450 : 250;
  const calories = Math.max(1300, Math.round((maintenance - deficit) / 10) * 10);
  const protein = Math.round(profile.weight * (profile.workouts >= 3 ? 1.7 : 1.4));
  return { calories, protein };
}

function mealMatchesProfile(meal, profile) {
  const dietMatch = profile.diet === "balanced" ? meal.diet.includes("balanced") : meal.diet.includes(profile.diet);
  const ingredients = meal.ingredients.join(" ").toLowerCase();
  const allergySafe = !profile.allergies.some((allergy) => ingredients.includes(allergy));
  return dietMatch && allergySafe;
}

function chooseMeal(type, profile, avoidName = "") {
  const matchingMeals = meals[type].filter((meal) => mealMatchesProfile(meal, profile) && meal.name !== avoidName);
  const pool = matchingMeals.length ? matchingMeals : meals[type].filter((meal) => meal.name !== avoidName);
  const index = Math.floor(Math.random() * pool.length);
  return { ...pool[index], type };
}

function generatePlan() {
  if (!state.profile) {
    alert("Save your profile first so the plan can match your goal.");
    return;
  }

  const types = ["breakfast", "lunch", "dinner"];
  if (state.profile.mealsPerDay === 4) types.push("snack");
  state.plan = types.map((type) => chooseMeal(type, state.profile));
  saveState();
  render();
}

function swapMeal(index) {
  const current = state.plan[index];
  state.plan[index] = chooseMeal(current.type, state.profile, current.name);
  saveState();
  render();
}

function getPlanTotals() {
  return state.plan.reduce(
    (totals, meal) => ({
      calories: totals.calories + meal.calories,
      protein: totals.protein + meal.protein,
      carbs: totals.carbs + meal.carbs,
      fats: totals.fats + meal.fats
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );
}

function updateDashboard() {
  if (!state.profile) {
    qs("#calorieTarget").textContent = "Set profile";
    qs("#proteinTarget").textContent = "0g";
    qs("#currentWeight").textContent = "-- kg";
    qs("#goalWeight").textContent = "-- kg";
    qs("#profileStatus").textContent = "Not saved";
    return;
  }

  const targets = calculateTargets(state.profile);
  const current = state.progress.currentWeight || state.profile.weight;
  qs("#calorieTarget").textContent = `${targets.calories} kcal`;
  qs("#proteinTarget").textContent = `${targets.protein}g`;
  qs("#currentWeight").textContent = `${current} kg`;
  qs("#goalWeight").textContent = `${state.profile.goal} kg`;
  qs("#profileStatus").textContent = "Saved";
  qs("#progressWeight").value = state.progress.currentWeight || state.profile.weight;
}

function renderMeals() {
  mealList.innerHTML = "";

  if (!state.plan.length) {
    qs("#mealSummary").textContent = "Save your profile, then generate a meal plan.";
    return;
  }

  const totals = getPlanTotals();
  qs("#mealSummary").textContent = `${totals.calories} kcal planned | ${totals.protein}g protein | ${totals.carbs}g carbs | ${totals.fats}g fats`;

  state.plan.forEach((meal, index) => {
    const card = document.createElement("article");
    card.className = "meal-card";
    card.innerHTML = `
      <div class="meal-top">
        <div>
          <span class="meal-type">${meal.type}</span>
          <h3>${meal.name}</h3>
        </div>
        <button class="swap" data-index="${index}">Swap</button>
      </div>
      <div class="meal-macros">
        <span>${meal.calories} kcal</span>
        <span>${meal.protein}g protein</span>
        <span>${meal.carbs}g carbs</span>
        <span>${meal.fats}g fats</span>
      </div>
      <p><strong>Ingredients:</strong> ${meal.ingredients.join(", ")}</p>
      <p><strong>Prep:</strong> ${meal.steps}</p>
    `;
    mealList.appendChild(card);
  });

  qsa(".swap").forEach((button) => {
    button.addEventListener("click", () => swapMeal(Number(button.dataset.index)));
  });
}

function renderGroceryList() {
  const ingredients = [...new Set(state.plan.flatMap((meal) => meal.ingredients))].sort();
  qs("#groceryCount").textContent = `${ingredients.length} item${ingredients.length === 1 ? "" : "s"}`;
  groceryList.innerHTML = "";

  if (!ingredients.length) {
    groceryList.innerHTML = "<li>Generate a meal plan to build your list.</li>";
    return;
  }

  ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    groceryList.appendChild(item);
  });
}

function renderProgress() {
  qs("#workoutDone").checked = state.progress.workoutDone;
  qs("#workoutBadge").textContent = state.progress.workoutDone ? "Workout done" : "Not logged";

  if (!state.profile) {
    qs("#progressFill").style.width = "0%";
    qs("#progressText").textContent = "Add your profile to see progress toward your goal.";
    return;
  }

  const start = state.profile.weight;
  const goal = state.profile.goal;
  const current = Number(state.progress.currentWeight || start);
  const totalChange = Math.abs(start - goal);
  const movedTowardGoal = start > goal ? start - current : current - start;
  const completed = totalChange === 0 ? 100 : Math.min(100, Math.max(0, (movedTowardGoal / totalChange) * 100));
  qs("#progressFill").style.width = `${completed}%`;
  qs("#progressText").textContent = `${Math.round(completed)}% toward your goal. Keep weight loss steady and fuel your workouts.`;
}

function render() {
  updateDashboard();
  renderMeals();
  renderGroceryList();
  renderProgress();
}

qsa(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    qsa(".tab").forEach((item) => item.classList.remove("active"));
    qsa(".view").forEach((view) => view.classList.remove("active"));
    tab.classList.add("active");
    qs(`#${tab.dataset.view}`).classList.add("active");
  });
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!profileForm.checkValidity()) {
    profileForm.reportValidity();
    return;
  }
  state.profile = getProfileFromForm();
  state.plan = [];
  state.progress.currentWeight = state.progress.currentWeight || state.profile.weight;
  saveState();
  render();
});

progressForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.progress.currentWeight = qs("#progressWeight").value;
  state.progress.workoutDone = qs("#workoutDone").checked;
  saveState();
  render();
});

qs("#generatePlan").addEventListener("click", generatePlan);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installCard.classList.add("show");
});

installApp.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installCard.classList.remove("show");
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installCard.classList.remove("show");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

qs("#resetApp").addEventListener("click", () => {
  if (!confirm("Reset profile, meal plan, and progress data?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = { ...defaultState, progress: { ...defaultState.progress } };
  profileForm.reset();
  progressForm.reset();
  render();
});

fillProfileForm();
render();
