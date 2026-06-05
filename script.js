const TRANSLATIONABLE_ELEMENTS_LIST = document.querySelectorAll("[data-i18n]");
console.log(TRANSLATIONABLE_ELEMENTS_LIST.length);
const LANG_LIST = ['en', 'pl', 'sv'];
let translations;

LANG_LIST.forEach(language => {
  document.querySelector('#' + language + 'Btn').addEventListener('click', async () => {
    console.log(language);
    translations = await loadLanguage(language);
    console.log(translations.header.subtitle);
    switchText(translations);
  });
});

async function loadLanguage(language) {
  let response = await fetch(`translations/${language}/main.json`);

  if (!response.ok) throw new Error(`Can't load language ${language}`);
  let translations = await response.json();
  return translations;
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((previous, current) => {
    return previous ? previous[current] : undefined;
  }, obj);
}

function switchText(translations) {
  console.log(translations);
  TRANSLATIONABLE_ELEMENTS_LIST.forEach((element) => {
    let elementKey = element.getAttribute("data-i18n");
    let text = getNestedValue(translations, elementKey);

    if(text) element.textContent = text;
    else console.log(`Couldn't find ${elementKey}`);
  })
  console.log("switching text complete")
}
