import ProfileClass from "./ProfileClass";

// import harold_pic from "../../../../assets/harold1edit.jpg";
const harold_pic =
  "https://lh3.googleusercontent.com/bb5IXMJf_C7Ibky5HzVJozwm6Fj_SnpBE3WOzZQOq17vDINwt2bGdkAHuQ3wiEDBQUfGcHDgJbGxadSuErn41AWbKqI-Btx2fBWoeazu92XNymQ08UUU1IhvXWE7E_iSkQgtB6JO1Pxlo3NHOMCWTV747ypqAa2Lvf9Bk4ytUTkgPjxLUvHA3htvjnHuXAfXfRJVRKNBDVxj7It6GpFRJDrAqIGVRYPSGAiXv7UcE8IfdTL4OcWQACPiJ8KjvR1wTJUGXDeK3zLBMdDiPcqUqkylborxy5EX2MpEKjVSofL2ezE31BJa2BkLcFOXkIWXzC-g3JUn16fq07EpfnGtImZdS5uHSsyQT3pEa0wjUsC1Q_XMpQ_-sPOdkDy4kQHYUcer2IttAM5Oy9Kkk7jgEP8NZZtHx29IcSJ-inzZL71ktf5zEzkPCHodTNqZkRyplpbzFJvAju4E9DU1vKhHU1-aZKfNy1ACJQL54m-JF44y25293ZEDAz8e8VjLM-QHzG0xZfTJAUy1-JD01HiXdBWrcZlte8ReksXEs5C7wjBK2nQgQ9IQO5IA-92MKsu9wJQBv8W355dO-ql6xrXoOWxFcI9UU2ujzULIKJ_m6Ei5BtYc4ZJDwYlX7SHuPl5bx8CiLxXzJ7iagPkGjwcDKPLlqeEyNXmOd5Of0-swNGKq4cUcjhAFAmwozOnMHK5VxdudhEGgAFasiS-BRxQCEUJRZAtBVSMipRmhio1B8dD0GtZKS-G-R7pr9yZGwSUivQbKci-05YnT67y4Eo4hxllO56xPw2gZxlVLWAAYUgY5Zevt3zSCp7casvjIonf8amQP13iHmB3cwn-d1ygiBkrUsuOaNNLrPOBHiZuxSOKeDpvemaXkm2qCy3HajFkD_Np-BhhDufuoOqyGcXzwEyUzy9oad1qSoOPu3ZsktS2a-tJn=w962-h1442-no?authuser=0";

const harold = new ProfileClass(
  "Harold Gordon-Smith",
  "Born in London, 1994. Harold began as a self-taught guitarist through to his undergraduate degree where he studied under Graham Devine. Harold is now an award-winning classical guitarist and has performed in master classes with many of the world’s top classical guitarists - David Russel, Marcin Dylla and Roberto Aussel. From Trinity Laban, Harold was awarded his master’s degree with Distinction. His career has taken him performing through Wigmore hall, Queens house and across Europe, from Vienna to Portugal.",
  "https://www.haroldgordonsmith.com/",
  harold_pic,
  true,
  true,
  {
    facebook: "https://www.facebook.com/HaroldGordonSmith",
    instagram: "https://www.instagram.com/haroldgordonsmith/",
    youtube: "https://www.youtube.com/channel/UCnQLL2TiLsqPNSo7tsFO5bQ",
  }
);

export default harold;
