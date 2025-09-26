import { ColorPaletteIcon } from './icons';

export default function ThemeSwitcher() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "night",
    "dim",
    "nord",
    "sunset"
  ];

  return (
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost btn-circle">
        <ColorPaletteIcon />
      </button>
      <ul class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
        <li class="menu-title">
          <span>Choose Theme</span>
        </li>
        {themes.map((theme) => (
          <li>
            <button data-set-theme={theme} data-act-class="active" class="capitalize">
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
