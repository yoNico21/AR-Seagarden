import { create, add } from "./tools";
import "/src/scss/share.scss";

export function share() {
  let container = create("div", "share-container");

  let button = create("button", "btn-share");

  let share = create("i", "fa-solid");
  share.classList.add("fa-share-from-square");

  let ul = create("ul", "socials-container");

  const pageTitle = "AR Seagarden";
  const link = encodeURI(window.location.href);
  const msg = encodeURIComponent(
    "Explore this breathtaking AR experience in Sonsbeek/Zypendaal!"
  );
  const msgtitle = encodeURIComponent(pageTitle);
  const whatsappSeaEmojis = "🐠🐙🦞🪼🐟🦐🪼🦀";
  const emailmsg = `
    ${msg}<br>
    <br>
    ${link}
    `;

  const socials = [
    {
      name: "whatsapp",
      color: "#25d366",
      shape: "round",
      href: `whatsapp://send?text=*${msgtitle}${whatsappSeaEmojis}*%0a%0a_${msg}_%0a%0a${link}`,
    },
    // {
    //   name: "instagram",
    //   color:
    //     "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    //   shape: "square",
    // },
    // { name: "snapchat", color: "#fffc00", shape: "round" },
    {
      name: "facebook",
      icon: "facebook-f",
      color: "#4267b2",
      shape: "square",
      href: `https://www.facebook.com/share.php?u=${link}`,
    },
    {
      name: "email",
      icon: "📧",
      color: "#ff5733",
      shape: "round",
      href: `mailto:test@example.com?subject=${msgtitle}&body=${emailmsg}`,
    },
  ];

  socials.forEach((social) => {
    let li = create("li", "social");
    li.classList.add(social.name);
    li.style.background = social.color;

    let a = create("a", social.name);
    a.classList.add("social-link");
    a.setAttribute("href", social.href);
    a.setAttribute("target", "_blank");

    if (social.name === "email") {
      a.innerText = social.icon;
      a.style.paddingRight = "0.1rem";
    } else {
      let i = create("i", `fa-brands`);
      if (social.icon) {
        i.classList.add(`fa-${social.icon}`);
      } else {
        i.classList.add(`fa-${social.name}`);
      }
      add(i, a);
    }

    if (social.shape === "round") {
      li.style.borderRadius = "50%";
      li.style.width = "2.5rem";
      li.style.height = "2.5rem";
    }

    add(li, ul);
    add(a, li);
  });

  add(button, container);
  add(share, button);
  add(ul, container);

  return container;
}
