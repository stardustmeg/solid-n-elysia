# Icons

This folder contains reusable SVG icon components.

## Usage

```tsx
import { ColorPaletteIcon } from '../components/icons';

// Use in components
<ColorPaletteIcon class="w-6 h-6" />
```

## Adding New Icons

1. Create a new `.tsx` file with your icon component
2. Export it from `index.ts`
3. Use the same props pattern: `{ class?: string }`

Example:

```tsx
export default function MyIcon(props: { class?: string }) {
  return (
    <svg class={`w-5 h-5 ${props.class || ''}`} {...props}>
      {/* SVG content */}
    </svg>
  );
}
```
