# Player Components

This document provides detailed usage instructions for the `Player` and `PlayerNoSound` components in the `taleem-presentation` library. These components are designed to handle educational presentations with or without sound.

## Player.svelte

This component is designed to run presentations or slides with sound. It supports audio data in two formats:

- **URL**: A direct link to the audio file.
- **Blob**: Audio data encoded as a blob.

### Props

- `slides` (required): An array of slide data to display.
- `audioData`: The sound data, either as a URL or a Blob.

### Usage Example

#### Using `audioData` as a URL:

```svelte

   --later

```

#### Using `audioData` as a Blob:

```svelte

```

### Methods

The component supports the following interactions:

- **Play:** Starts the presentation and the sound.
- **Pause:** Pauses the presentation and the sound.

### Events

- `on:play`: Triggered when the presentation starts playing.
- `on:pause`: Triggered when the presentation is paused.

---

## PlayerNoSound.svelte

This component is for running presentations or slides without any sound. It is useful for static presentations or scenarios where audio is not required.

### Props

- `slides` (required): An array of slide data to display.

### Usage Example

```svelte


```

### Methods

The component supports the following interactions:

- **Start:** Begins the presentation.
- **Stop:** Ends the presentation.

---
