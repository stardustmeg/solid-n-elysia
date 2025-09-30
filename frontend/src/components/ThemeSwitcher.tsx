
import { Icon, Trees, Music4, Sparkles, CupSoda, Moon } from 'lucide-solid';
import { mug } from '@lucide/lab';
import { createSignal } from 'solid-js';

const getThemeIcon = (theme: string) => {
  switch (theme) {
    case "caramellatte": return <Icon iconNode={mug} class="w-4 h-4" />;
    case "forest": return <Trees class="w-4 h-4" />;
    case "lofi": return <Music4 class="w-4 h-4" />;
    case "night": return <Sparkles class="w-4 h-4" />;
    case "lemonade": return <CupSoda class="w-4 h-4" />;
    case 'dark' : return <Moon class="w-4 h-4" />;
  }
}

const themes = {
  caramellatte: { label: "Caramel latte" },
  forest: { label: "Forest" },
  lofi: { label: "Lofi" },
  night: { label: "Night" },
  lemonade: { label: "Lemonade" },
  dark: { label: "Dark" }
}

export default function ThemeSwitcher() {
  const themeKeys = Object.keys(themes);
  const [currentTheme, setCurrentTheme] = createSignal(themeKeys[0]);

  return (
    <div class="dropdown dropdown-end">
      <button class="btn btn-neutral btn-square btn-ghost">
        {getThemeIcon(currentTheme())}
      </button>
      <ul class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
        <li class="menu-title">
          <span>Choose Theme</span>
        </li>
        {themeKeys.map((theme) => (
          <li>
            <button
              data-set-theme={theme}
              data-act-class="active"
              class="btn btn-ghost place-content-between w-full"
              onClick={() => setCurrentTheme(theme)}
            >
              <span class="whitespace-nowrap">{themes[theme as keyof typeof themes].label}</span>
              {getThemeIcon(theme)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
