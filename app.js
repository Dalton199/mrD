const STORAGE_KEY = "fitmeal-planner-state";

const translations = {
  en: {
    todayPlan: "Today's plan",
    dailyTarget: "Daily target",
    setProfile: "Set profile",
    protein: "protein",
    language: "Language",
    units: "Units",
    metric: "Metric",
    imperial: "Imperial",
    installTitle: "Install on Android",
    installBody: "Add FitMeal Planner to your home screen for app-style access.",
    install: "Install",
    current: "Current",
    goal: "Goal",
    setup: "Setup",
    yourProfile: "Your profile",
    notSaved: "Not saved",
    saved: "Saved",
    profilePicture: "Profile picture",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    age: "Age",
    gender: "Gender",
    female: "Female",
    male: "Male",
    other: "Other",
    height: "Height",
    weight: "Weight",
    goalWeightLabel: "Goal weight",
    workouts: "Workouts / week",
    activity: "Activity level",
    light: "Light",
    moderate: "Moderate",
    active: "Active",
    veryActive: "Very active",
    diet: "Diet preference",
    balanced: "Balanced",
    vegetarian: "Vegetarian",
    highProtein: "High protein",
    allergies: "Allergies or avoids",
    personalNote: "Personal note",
    mealsPerDay: "Meals / day",
    threeMeals: "3 meals",
    fourMeals: "3 meals + snack",
    saveProfile: "Save profile",
    fuel: "Fuel",
    dailyMeals: "Daily meals",
    generate: "Generate",
    shop: "Shop",
    groceryListTitle: "Grocery list",
    track: "Track",
    progress: "Progress",
    todaysWeight: "Today's weight",
    workoutCompleted: "Workout completed",
    saveProgress: "Save progress",
    dashboardTab: "Dashboard",
    mealsTab: "Meals",
    groceryTab: "Grocery",
    progressTab: "Progress",
    saveFirst: "Save your profile first so the plan can match your goal.",
    emptyMealPlan: "Save your profile, then generate a meal plan.",
    plannedSummary: "{calories} kcal planned | {protein}g protein | {carbs}g carbs | {fats}g fats",
    ingredients: "Ingredients",
    prep: "Prep",
    swap: "Swap",
    items: "{count} items",
    item: "{count} item",
    emptyGrocery: "Generate a meal plan to build your list.",
    workoutDone: "Workout done",
    notLogged: "Not logged",
    progressEmpty: "Add your profile to see progress toward your goal.",
    progressText: "{percent}% toward your goal. Keep weight loss steady and fuel your workouts.",
    resetConfirm: "Reset profile, meal plan, and progress data?",
    imageOnly: "Please choose an image file.",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack"
  },
  es: {
    todayPlan: "Plan de hoy",
    dailyTarget: "Meta diaria",
    setProfile: "Configura perfil",
    protein: "proteina",
    language: "Idioma",
    units: "Unidades",
    metric: "Metrico",
    imperial: "Imperial",
    installTitle: "Instalar en Android",
    installBody: "Agrega FitMeal Planner a tu pantalla de inicio.",
    install: "Instalar",
    current: "Actual",
    goal: "Meta",
    setup: "Configurar",
    yourProfile: "Tu perfil",
    notSaved: "No guardado",
    saved: "Guardado",
    profilePicture: "Foto de perfil",
    fullName: "Nombre completo",
    email: "Correo",
    phone: "Telefono",
    age: "Edad",
    gender: "Genero",
    female: "Mujer",
    male: "Hombre",
    other: "Otro",
    height: "Estatura",
    weight: "Peso",
    goalWeightLabel: "Peso meta",
    workouts: "Entrenos / semana",
    activity: "Nivel de actividad",
    light: "Ligero",
    moderate: "Moderado",
    active: "Activo",
    veryActive: "Muy activo",
    diet: "Preferencia alimentaria",
    balanced: "Balanceada",
    vegetarian: "Vegetariana",
    highProtein: "Alta proteina",
    allergies: "Alergias o evitar",
    personalNote: "Nota personal",
    mealsPerDay: "Comidas / dia",
    threeMeals: "3 comidas",
    fourMeals: "3 comidas + snack",
    saveProfile: "Guardar perfil",
    fuel: "Energia",
    dailyMeals: "Comidas diarias",
    generate: "Generar",
    shop: "Comprar",
    groceryListTitle: "Lista de compras",
    track: "Seguimiento",
    progress: "Progreso",
    todaysWeight: "Peso de hoy",
    workoutCompleted: "Entreno completado",
    saveProgress: "Guardar progreso",
    dashboardTab: "Inicio",
    mealsTab: "Comidas",
    groceryTab: "Compras",
    progressTab: "Progreso",
    saveFirst: "Guarda tu perfil primero para ajustar el plan a tu meta.",
    emptyMealPlan: "Guarda tu perfil y genera un plan de comidas.",
    plannedSummary: "{calories} kcal planificadas | {protein}g proteina | {carbs}g carbohidratos | {fats}g grasas",
    ingredients: "Ingredientes",
    prep: "Preparacion",
    swap: "Cambiar",
    items: "{count} articulos",
    item: "{count} articulo",
    emptyGrocery: "Genera un plan para crear tu lista.",
    workoutDone: "Entreno hecho",
    notLogged: "Sin registrar",
    progressEmpty: "Agrega tu perfil para ver tu progreso.",
    progressText: "{percent}% hacia tu meta. Baja de peso de forma constante y alimenta tus entrenos.",
    resetConfirm: "Restablecer perfil, comidas y progreso?",
    imageOnly: "Elige un archivo de imagen.",
    breakfast: "Desayuno",
    lunch: "Almuerzo",
    dinner: "Cena",
    snack: "Snack"
  },
  fr: {
    todayPlan: "Plan du jour",
    dailyTarget: "Objectif quotidien",
    setProfile: "Creer le profil",
    protein: "proteines",
    language: "Langue",
    units: "Unites",
    metric: "Metrique",
    imperial: "Imperial",
    installTitle: "Installer sur Android",
    installBody: "Ajoutez FitMeal Planner a votre ecran d'accueil.",
    install: "Installer",
    current: "Actuel",
    goal: "Objectif",
    setup: "Reglage",
    yourProfile: "Votre profil",
    notSaved: "Non enregistre",
    saved: "Enregistre",
    profilePicture: "Photo de profil",
    fullName: "Nom complet",
    email: "Email",
    phone: "Telephone",
    age: "Age",
    gender: "Genre",
    female: "Femme",
    male: "Homme",
    other: "Autre",
    height: "Taille",
    weight: "Poids",
    goalWeightLabel: "Poids objectif",
    workouts: "Seances / semaine",
    activity: "Niveau d'activite",
    light: "Leger",
    moderate: "Modere",
    active: "Actif",
    veryActive: "Tres actif",
    diet: "Preference alimentaire",
    balanced: "Equilibree",
    vegetarian: "Vegetarienne",
    highProtein: "Riche en proteines",
    allergies: "Allergies ou evitements",
    personalNote: "Note personnelle",
    mealsPerDay: "Repas / jour",
    threeMeals: "3 repas",
    fourMeals: "3 repas + collation",
    saveProfile: "Enregistrer le profil",
    fuel: "Carburant",
    dailyMeals: "Repas du jour",
    generate: "Generer",
    shop: "Courses",
    groceryListTitle: "Liste de courses",
    track: "Suivi",
    progress: "Progres",
    todaysWeight: "Poids du jour",
    workoutCompleted: "Seance terminee",
    saveProgress: "Enregistrer",
    dashboardTab: "Accueil",
    mealsTab: "Repas",
    groceryTab: "Courses",
    progressTab: "Progres",
    saveFirst: "Enregistrez d'abord votre profil pour adapter le plan.",
    emptyMealPlan: "Enregistrez votre profil, puis genere un plan.",
    plannedSummary: "{calories} kcal prevues | {protein}g proteines | {carbs}g glucides | {fats}g lipides",
    ingredients: "Ingredients",
    prep: "Preparation",
    swap: "Changer",
    items: "{count} articles",
    item: "{count} article",
    emptyGrocery: "Generez un plan pour creer la liste.",
    workoutDone: "Seance faite",
    notLogged: "Non note",
    progressEmpty: "Ajoutez votre profil pour voir le progres.",
    progressText: "{percent}% vers votre objectif. Gardez une perte stable et alimentez vos seances.",
    resetConfirm: "Reinitialiser profil, repas et progres?",
    imageOnly: "Choisissez un fichier image.",
    breakfast: "Petit dejeuner",
    lunch: "Dejeuner",
    dinner: "Diner",
    snack: "Collation"
  },
  pt: {
    todayPlan: "Plano de hoje",
    dailyTarget: "Meta diaria",
    setProfile: "Criar perfil",
    protein: "proteina",
    language: "Idioma",
    units: "Unidades",
    metric: "Metrico",
    imperial: "Imperial",
    installTitle: "Instalar no Android",
    installBody: "Adicione o FitMeal Planner a tela inicial.",
    install: "Instalar",
    current: "Atual",
    goal: "Meta",
    setup: "Configurar",
    yourProfile: "Seu perfil",
    notSaved: "Nao salvo",
    saved: "Salvo",
    profilePicture: "Foto de perfil",
    fullName: "Nome completo",
    email: "Email",
    phone: "Telefone",
    age: "Idade",
    gender: "Genero",
    female: "Feminino",
    male: "Masculino",
    other: "Outro",
    height: "Altura",
    weight: "Peso",
    goalWeightLabel: "Peso meta",
    workouts: "Treinos / semana",
    activity: "Nivel de atividade",
    light: "Leve",
    moderate: "Moderado",
    active: "Ativo",
    veryActive: "Muito ativo",
    diet: "Preferencia alimentar",
    balanced: "Balanceada",
    vegetarian: "Vegetariana",
    highProtein: "Alta proteina",
    allergies: "Alergias ou evitar",
    personalNote: "Nota pessoal",
    mealsPerDay: "Refeicoes / dia",
    threeMeals: "3 refeicoes",
    fourMeals: "3 refeicoes + lanche",
    saveProfile: "Salvar perfil",
    fuel: "Energia",
    dailyMeals: "Refeicoes diarias",
    generate: "Gerar",
    shop: "Compras",
    groceryListTitle: "Lista de compras",
    track: "Acompanhar",
    progress: "Progresso",
    todaysWeight: "Peso de hoje",
    workoutCompleted: "Treino concluido",
    saveProgress: "Salvar progresso",
    dashboardTab: "Inicio",
    mealsTab: "Refeicoes",
    groceryTab: "Compras",
    progressTab: "Progresso",
    saveFirst: "Salve seu perfil primeiro para ajustar o plano.",
    emptyMealPlan: "Salve seu perfil e gere um plano.",
    plannedSummary: "{calories} kcal planejadas | {protein}g proteina | {carbs}g carboidratos | {fats}g gorduras",
    ingredients: "Ingredientes",
    prep: "Preparo",
    swap: "Trocar",
    items: "{count} itens",
    item: "{count} item",
    emptyGrocery: "Gere um plano para criar a lista.",
    workoutDone: "Treino feito",
    notLogged: "Nao registrado",
    progressEmpty: "Adicione seu perfil para ver o progresso.",
    progressText: "{percent}% ate sua meta. Perca peso com calma e alimente seus treinos.",
    resetConfirm: "Redefinir perfil, refeicoes e progresso?",
    imageOnly: "Escolha um arquivo de imagem.",
    breakfast: "Cafe da manha",
    lunch: "Almoco",
    dinner: "Jantar",
    snack: "Lanche"
  },
  ar: {
    todayPlan: "خطة اليوم",
    dailyTarget: "الهدف اليومي",
    setProfile: "أكمل الملف",
    protein: "بروتين",
    language: "اللغة",
    units: "الوحدات",
    metric: "متري",
    imperial: "إمبراطوري",
    installTitle: "تثبيت على أندرويد",
    installBody: "أضف FitMeal Planner إلى الشاشة الرئيسية.",
    install: "تثبيت",
    current: "الحالي",
    goal: "الهدف",
    setup: "الإعداد",
    yourProfile: "ملفك",
    notSaved: "غير محفوظ",
    saved: "محفوظ",
    profilePicture: "صورة الملف",
    fullName: "الاسم الكامل",
    email: "البريد",
    phone: "الهاتف",
    age: "العمر",
    gender: "الجنس",
    female: "أنثى",
    male: "ذكر",
    other: "آخر",
    height: "الطول",
    weight: "الوزن",
    goalWeightLabel: "وزن الهدف",
    workouts: "تمارين / أسبوع",
    activity: "مستوى النشاط",
    light: "خفيف",
    moderate: "متوسط",
    active: "نشط",
    veryActive: "نشط جدا",
    diet: "نوع الغذاء",
    balanced: "متوازن",
    vegetarian: "نباتي",
    highProtein: "بروتين عال",
    allergies: "حساسية أو تجنب",
    personalNote: "ملاحظة شخصية",
    mealsPerDay: "وجبات / يوم",
    threeMeals: "3 وجبات",
    fourMeals: "3 وجبات + وجبة خفيفة",
    saveProfile: "حفظ الملف",
    fuel: "تغذية",
    dailyMeals: "وجبات اليوم",
    generate: "إنشاء",
    shop: "تسوق",
    groceryListTitle: "قائمة المشتريات",
    track: "تتبع",
    progress: "التقدم",
    todaysWeight: "وزن اليوم",
    workoutCompleted: "تم التمرين",
    saveProgress: "حفظ التقدم",
    dashboardTab: "الرئيسية",
    mealsTab: "الوجبات",
    groceryTab: "المشتريات",
    progressTab: "التقدم",
    saveFirst: "احفظ ملفك أولا حتى يناسب الخطة هدفك.",
    emptyMealPlan: "احفظ ملفك ثم أنشئ خطة وجبات.",
    plannedSummary: "{calories} سعرة مخططة | {protein}غ بروتين | {carbs}غ كربوهيدرات | {fats}غ دهون",
    ingredients: "المكونات",
    prep: "التحضير",
    swap: "تبديل",
    items: "{count} عناصر",
    item: "{count} عنصر",
    emptyGrocery: "أنشئ خطة وجبات لبناء القائمة.",
    workoutDone: "تم التمرين",
    notLogged: "غير مسجل",
    progressEmpty: "أضف ملفك لرؤية التقدم.",
    progressText: "{percent}% نحو هدفك. حافظ على نزول وزن ثابت وغذ تمرينك.",
    resetConfirm: "إعادة تعيين الملف والوجبات والتقدم؟",
    imageOnly: "اختر ملف صورة.",
    breakfast: "فطور",
    lunch: "غداء",
    dinner: "عشاء",
    snack: "وجبة خفيفة"
  }
};

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
  settings: {
    language: "en",
    units: "metric"
  },
  profile: null,
  plan: [],
  progress: {
    currentWeightKg: "",
    workoutDone: false
  }
};

let state = loadState();
let deferredInstallPrompt = null;
let pendingPhoto = state.profile?.photo || "";

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

const profileForm = qs("#profileForm");
const progressForm = qs("#progressForm");
const mealList = qs("#mealList");
const groceryList = qs("#groceryList");
const installCard = qs("#installCard");
const installApp = qs("#installApp");
const languageSelect = qs("#languageSelect");
const unitSelect = qs("#unitSelect");

function t(key, values = {}) {
  const language = state?.settings?.language || "en";
  const text = translations[language]?.[key] || translations.en[key] || key;
  return Object.entries(values).reduce((result, [name, value]) => result.replaceAll(`{${name}}`, value), text);
}

function round(value, digits = 1) {
  const multiplier = 10 ** digits;
  return Math.round(value * multiplier) / multiplier;
}

function kgToDisplay(kg) {
  return state.settings.units === "imperial" ? round(kg * 2.20462) : round(kg);
}

function displayToKg(value) {
  const number = Number(value);
  return state.settings.units === "imperial" ? round(number / 2.20462, 2) : round(number, 2);
}

function cmToDisplay(cm) {
  return state.settings.units === "imperial" ? round(cm / 2.54) : round(cm);
}

function displayToCm(value) {
  const number = Number(value);
  return state.settings.units === "imperial" ? round(number * 2.54, 1) : round(number, 1);
}

function weightUnit() {
  return state.settings.units === "imperial" ? "lb" : "kg";
}

function heightUnit() {
  return state.settings.units === "imperial" ? "in" : "cm";
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const profile = stored.profile
      ? {
          photo: "",
          fullName: "",
          email: "",
          phone: "",
          personalNote: "",
          allergies: [],
          ...stored.profile
        }
      : null;
    if (profile) {
      profile.heightCm = profile.heightCm || profile.height || "";
      profile.weightKg = profile.weightKg || profile.weight || "";
      profile.goalKg = profile.goalKg || profile.goal || "";
    }
    return {
      settings: { ...defaultState.settings, ...(stored.settings || {}) },
      profile,
      plan: Array.isArray(stored.plan) ? stored.plan : [],
      progress: {
        ...defaultState.progress,
        ...(stored.progress || {}),
        currentWeightKg: stored.progress?.currentWeightKg || stored.progress?.currentWeight || ""
      }
    };
  } catch {
    return {
      settings: { ...defaultState.settings },
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
    photo: pendingPhoto || state.profile?.photo || "",
    fullName: qs("#fullName").value.trim(),
    email: qs("#email").value.trim(),
    phone: qs("#phone").value.trim(),
    age: Number(qs("#age").value),
    gender: qs("#gender").value,
    heightCm: displayToCm(qs("#height").value),
    weightKg: displayToKg(qs("#weight").value),
    goalKg: displayToKg(qs("#goal").value),
    workouts: Number(qs("#workouts").value),
    activity: Number(qs("#activity").value),
    diet: qs("#diet").value,
    allergies: qs("#allergies").value
      .toLowerCase()
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    personalNote: qs("#personalNote").value.trim(),
    mealsPerDay: Number(qs("#mealsPerDay").value)
  };
}

function fillProfileForm() {
  if (!state.profile) return;
  const profile = state.profile;
  qs("#fullName").value = profile.fullName || "";
  qs("#email").value = profile.email || "";
  qs("#phone").value = profile.phone || "";
  qs("#age").value = profile.age;
  qs("#gender").value = profile.gender;
  qs("#height").value = cmToDisplay(profile.heightCm || profile.height);
  qs("#weight").value = kgToDisplay(profile.weightKg || profile.weight);
  qs("#goal").value = kgToDisplay(profile.goalKg || profile.goal);
  qs("#workouts").value = profile.workouts;
  qs("#activity").value = profile.activity;
  qs("#diet").value = profile.diet;
  qs("#allergies").value = (profile.allergies || []).join(", ");
  qs("#personalNote").value = profile.personalNote || "";
  qs("#mealsPerDay").value = profile.mealsPerDay;
  pendingPhoto = profile.photo || "";
  updatePhotoPreview(profile.photo, profile.fullName);
}

function updatePhotoPreview(photo, fullName = "") {
  const preview = qs("#photoPreview");
  const initials = qs("#photoInitials");
  const letters = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  initials.textContent = letters || "FM";

  if (photo) {
    preview.classList.add("has-image");
    preview.style.backgroundImage = `url("${photo}")`;
    return;
  }

  preview.classList.remove("has-image");
  preview.style.backgroundImage = "";
}

function calculateTargets(profile) {
  const weightKg = Number(profile.weightKg || profile.weight);
  const heightCm = Number(profile.heightCm || profile.height);
  const goalKg = Number(profile.goalKg || profile.goal);
  const baseGender = profile.gender === "male" ? 5 : -161;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * profile.age + baseGender;
  const maintenance = bmr * profile.activity;
  const deficit = weightKg > goalKg ? 450 : 250;
  const calories = Math.max(1300, Math.round((maintenance - deficit) / 10) * 10);
  const protein = Math.round(weightKg * (profile.workouts >= 3 ? 1.7 : 1.4));
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
    alert(t("saveFirst"));
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
    qs("#calorieTarget").textContent = t("setProfile");
    qs("#proteinTarget").textContent = "0g";
    qs("#currentWeight").textContent = `-- ${weightUnit()}`;
    qs("#goalWeight").textContent = `-- ${weightUnit()}`;
    qs("#profileStatus").textContent = t("notSaved");
    return;
  }

  const targets = calculateTargets(state.profile);
  const current = state.progress.currentWeightKg || state.profile.weightKg || state.profile.weight;
  const goal = state.profile.goalKg || state.profile.goal;
  qs("#calorieTarget").textContent = `${targets.calories} kcal`;
  qs("#proteinTarget").textContent = `${targets.protein}g`;
  qs("#currentWeight").textContent = `${kgToDisplay(current)} ${weightUnit()}`;
  qs("#goalWeight").textContent = `${kgToDisplay(goal)} ${weightUnit()}`;
  qs("#profileStatus").textContent = t("saved");
  qs("#progressWeight").value = kgToDisplay(current);
}

function renderMeals() {
  mealList.innerHTML = "";

  if (!state.plan.length) {
    qs("#mealSummary").textContent = t("emptyMealPlan");
    return;
  }

  const totals = getPlanTotals();
  qs("#mealSummary").textContent = t("plannedSummary", totals);

  state.plan.forEach((meal, index) => {
    const card = document.createElement("article");
    card.className = "meal-card";
    card.innerHTML = `
      <div class="meal-top">
        <div>
          <span class="meal-type">${t(meal.type)}</span>
          <h3>${meal.name}</h3>
        </div>
        <button class="swap" data-index="${index}">${t("swap")}</button>
      </div>
      <div class="meal-macros">
        <span>${meal.calories} kcal</span>
        <span>${meal.protein}g protein</span>
        <span>${meal.carbs}g carbs</span>
        <span>${meal.fats}g fats</span>
      </div>
      <p><strong>${t("ingredients")}:</strong> ${meal.ingredients.join(", ")}</p>
      <p><strong>${t("prep")}:</strong> ${meal.steps}</p>
    `;
    mealList.appendChild(card);
  });

  qsa(".swap").forEach((button) => {
    button.addEventListener("click", () => swapMeal(Number(button.dataset.index)));
  });
}

function renderGroceryList() {
  const ingredients = [...new Set(state.plan.flatMap((meal) => meal.ingredients))].sort();
  qs("#groceryCount").textContent = t(ingredients.length === 1 ? "item" : "items", { count: ingredients.length });
  groceryList.innerHTML = "";

  if (!ingredients.length) {
    groceryList.innerHTML = `<li>${t("emptyGrocery")}</li>`;
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
  qs("#workoutBadge").textContent = state.progress.workoutDone ? t("workoutDone") : t("notLogged");

  if (!state.profile) {
    qs("#progressFill").style.width = "0%";
    qs("#progressText").textContent = t("progressEmpty");
    return;
  }

  const start = Number(state.profile.weightKg || state.profile.weight);
  const goal = Number(state.profile.goalKg || state.profile.goal);
  const current = Number(state.progress.currentWeightKg || start);
  const totalChange = Math.abs(start - goal);
  const movedTowardGoal = start > goal ? start - current : current - start;
  const completed = totalChange === 0 ? 100 : Math.min(100, Math.max(0, (movedTowardGoal / totalChange) * 100));
  qs("#progressFill").style.width = `${completed}%`;
  qs("#progressText").textContent = t("progressText", { percent: Math.round(completed) });
}

function applyTranslations() {
  document.documentElement.lang = state.settings.language;
  document.documentElement.dir = state.settings.language === "ar" ? "rtl" : "ltr";
  qsa("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  languageSelect.value = state.settings.language;
  unitSelect.value = state.settings.units;
  qs("#heightUnit").textContent = heightUnit();
  qs("#weightUnit").textContent = weightUnit();
  qs("#goalUnit").textContent = weightUnit();
  qs("#height").placeholder = state.settings.units === "imperial" ? "67" : "170";
  qs("#weight").placeholder = state.settings.units === "imperial" ? "172" : "78";
  qs("#goal").placeholder = state.settings.units === "imperial" ? "154" : "70";
  qs("#height").min = state.settings.units === "imperial" ? "47" : "120";
  qs("#height").max = state.settings.units === "imperial" ? "90" : "230";
  qs("#weight").min = state.settings.units === "imperial" ? "77" : "35";
  qs("#weight").max = state.settings.units === "imperial" ? "550" : "250";
  qs("#goal").min = state.settings.units === "imperial" ? "77" : "35";
  qs("#goal").max = state.settings.units === "imperial" ? "550" : "250";
  qs("#progressWeight").min = state.settings.units === "imperial" ? "77" : "35";
  qs("#progressWeight").max = state.settings.units === "imperial" ? "550" : "250";
  qs("#progressWeight").placeholder = `${t("current")} ${weightUnit()}`;
}

function render() {
  applyTranslations();
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

languageSelect.addEventListener("change", () => {
  state.settings.language = languageSelect.value;
  saveState();
  render();
});

unitSelect.addEventListener("change", () => {
  state.settings.units = unitSelect.value;
  saveState();
  if (state.profile) {
    fillProfileForm();
  }
  render();
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!profileForm.checkValidity()) {
    profileForm.reportValidity();
    return;
  }
  state.profile = getProfileFromForm();
  state.plan = [];
  state.progress.currentWeightKg = state.progress.currentWeightKg || state.profile.weightKg;
  saveState();
  render();
});

qs("#photo").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert(t("imageOnly"));
    event.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingPhoto = reader.result;
    if (state.profile) {
      state.profile.photo = reader.result;
    }
    saveState();
    updatePhotoPreview(reader.result, qs("#fullName").value.trim());
  });
  reader.readAsDataURL(file);
});

qs("#fullName").addEventListener("input", () => {
  updatePhotoPreview(pendingPhoto || state.profile?.photo || "", qs("#fullName").value.trim());
});

progressForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.progress.currentWeightKg = displayToKg(qs("#progressWeight").value);
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
  if (!confirm(t("resetConfirm"))) return;
  localStorage.removeItem(STORAGE_KEY);
  state = {
    settings: { ...defaultState.settings },
    profile: null,
    plan: [],
    progress: { ...defaultState.progress }
  };
  profileForm.reset();
  progressForm.reset();
  pendingPhoto = "";
  updatePhotoPreview("", "");
  render();
});

fillProfileForm();
render();
