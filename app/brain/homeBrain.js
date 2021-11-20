const featuredCategoriesData = [
    {
      name : "Vêtements",
      image : "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name : "Offres d'emploi",
      image : "https://images.pexels.com/photos/7925821/pexels-photo-7925821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name : "Vacances",
      image : "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name : "Ventes immo",
      image : "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name : "Voitures",
      image : "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name : "Ameublement",
      image : "https://images.pexels.com/photos/5143025/pexels-photo-5143025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name : "Electroménager",
      image : "https://images.pexels.com/photos/1370082/pexels-photo-1370082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name : "Décoration",
      image : "https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    }
  ]
export default {
    getTopCategories : () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(featuredCategoriesData);
            }, 3100);
          });
    }
}