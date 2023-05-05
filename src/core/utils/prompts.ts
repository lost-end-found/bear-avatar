import urlSlug from "url-slug";

const items = [
  {
    label: "viking",
    prompt:
      "closeup portrait painting of @me as a viking, ultra realistic, concept art, intricate details, powerful and fierce, highly detailed, photorealistic, octane render, 8 k, unreal engine. art by artgerm and greg rutkowski and charlie bowater and magali villeneuve and alphonse mucha, golden hour, horns and braids in hair, fur-lined cape and helmet, axe in hand, looking towards the camera.",
  },
  {
    label: "paladin",
    prompt:
      "closeup portrait of @me as a paladin, wearing brilliant white armor and a crown, fantasy concept art, artstation trending, highly detailed, beautiful landscape in the background, art by wlop, greg rutkowski, thierry doizon, charlie bowater, alphonse mucha, golden hour lighting, ultra realistic.",
  },
  {
    label: "saint",
    prompt:
      "painting of @me person, icon, byzantine, detailed, soft color, saint, halo, clean skin, looking straight, beautiful mouth, full face, Romanian Pantocrator, wax paint, symmetrical face",
  },
  // {
  //   label: "hobbit",
  //   prompt:
  //     "Closeup portrait of @me as a Hobbit, small, big brown eyes, green and brown clothing, detailed facial features, small feet, wispy hair, fantasy concept art, artstation trending, highly detailed, art by John Howe, Alan Lee, and Weta Workshop, earthy colors, looking into camera.",
  // },
  {
    label: "elf",
    prompt:
      "Closeup portrait of @me as an elf with long blond hair, fantasy concept art, intricate details, detailed armor, majestic background, art by wlop, Greg Rutkowski, digital painting, smooth lighting, looking towards the viewer.",
  },
  {
    label: "jedi",
    prompt:
      "closeup portrait of @me as a jedi with a lightsaber, highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.",
  },
  {
    label: "cyberpunk",
    womanImg: "https://i.imgur.com/sQNZhR9.jpg",
    manImg: "",
    prompt:
      "closeup portrait of @me as a cyberpunk, dark and gritty, highly detailed, retro-futuristic style, neon lighting, cyberpunk city in the background, art by wlop, greg rutkowski, and charlie bowater, 8 k resolution, ultra-realistic, octane render, unreal engine.",
  },
  {
    label: "cyborg",
    prompt:
      "closeup portrait of @me as a cyborg, mechanical parts, ultra realistic, concept art, intricate details, eerie, highly detailed, photorealistic, 8k, unreal engine. art by artgerm and greg rutkowski and charlie bowater and magali villeneuve and alphonse mucha, golden hour, cyberpunk, robotic, steampunk, neon colors, metallic textures.",
  },
];

export const prompts = items.map((item) => ({
  ...item,
  slug: urlSlug(item.label, { separator: "-" }),
}));
