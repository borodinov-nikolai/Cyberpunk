type Complectation_item = {
  id: number;
  icon: string;
  text: string;
};

const complectation_list: Complectation_item[] = [
  {
    id: 1,
    icon: "/icons/cd.svg",
    text: "Футляр с игровыми дисками",
  },
  {
    id: 2,
    icon: "/icons/code.svg",
    text: "Футляр с кодом для загрузки игры и дисками (pc)",
  },
  {
    id: 3,
    icon: "/icons/handbook.svg",
    text: "Справочник с информацией об игровом мире",
  },
];

export default complectation_list;
