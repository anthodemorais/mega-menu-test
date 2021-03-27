import { Menu } from '../Settings';

const defaultMenu: Menu = {
  firstLevel: [
    { title: "MenuItem1", content: [{ title: "SubMenuItem1", content: [{link: "/a", title: "first", content: []}] }] },
    { title: "MenuItem2", content: [{ title: "SubMenuItem1", content: [{link: "/a", title: "first", content: []}] }] },
    { title: "MenuItem3", content: [{ title: "SubMenuItem1", content: [{link: "/a", title: "first", content: []}] }] },
  ]
}

export default defaultMenu;