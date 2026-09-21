🤟 Ahmed-Deaf-11-ASL

> AI-Powered Real-Time Sign Language Communication Assistant

Ahmed-Deaf-11-ASL is an AI-powered mobile application that bridges communication between hearing individuals and the Deaf community by translating spoken Indonesian into sign language gestures in real time.

Instead of displaying only text, Ahmed-Deaf-11-ASL understands the context of spoken language using a Large Language Model (LLM), extracts meaningful gesture tokens, and plays corresponding sign language videos sequentially.



✨ Features

- 🎤 Real-time Speech Recognition
- 🧠 AI Context Understanding
- 🌎 Indonesian → English Translation
- 🤟 Automatic Sign Language Gesture Extraction
- 🎬 Sequential Sign Language Video Playback
- ☁️ Cloud-based Gesture Database (Supabase)
- 📱 Cross-platform Mobile Application (Flutter)



🚀 System Architecture

```
User Speech
      │
      ▼
Speech-to-Text
      │
      ▼
Recognized Sentence
      │
      ▼
Fireworks AI (LLM)
      │
      ├── English Translation
      └── Gesture Extraction
              │
              ▼
Gesture Mapping
              │
              ▼
Supabase Storage
              │
              ▼
Gesture Video URLs
              │
              ▼
Flutter Video Player
              │
              ▼
Sign Language Animation
```


🧠 AI Pipeline

Our AI pipeline consists of four main stages.

1. Speech Recognition

The application captures the user's speech using Flutter Speech-to-Text.

Example


```
Halo apa kabar
```

↓

Recognized Text

```
Halo apa kabar
```

---

2. Context Understanding

Instead of performing simple keyword matching, our Large Language Model first understands the semantic meaning of the sentence.

The AI simultaneously performs:

- Context Understanding
- English Translation
- Gesture Token Extraction

Example

```
{
  "translation": "Hello, how are you?",
  "gesture": [
    "halo",
    "apa",
    "kabar"
  ]
}
```

---

3. Gesture Mapping

Each extracted gesture is mapped into our cloud-based gesture database stored in Supabase Storage.

Example

```
halo
apa
kabar
```

↓

```
halo.mp4
apa.mp4
kabar.mp4
```

↓

Public URLs

---

4. Sequential Gesture Playback

Gesture videos are played automatically in sequence.

```
halo.mp4

↓

apa.mp4

↓

kabar.mp4
```

This creates a smooth sign language animation for the user.

---

🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Flutter | Mobile Application |
| Fireworks AI | Large Language Model |
| Speech-to-Text | Voice Recognition |
| Supabase | Cloud Storage |
| Video Player | Gesture Playback |
| Dart | Application Logic |

---

📂 Project Structure

```
mobile/

lib/

├── screens/

├── widgets/

├── services/

│ ├── speech_service.dart

│ ├── fireworks_service.dart

│ ├── sign_service.dart

│ └── ai_pipeline.dart

├── models/

└── main.dart
```

---

⚙️ Core Components

SpeechService

Captures speech and converts it into text.

---

FireworksService

Communicates with the Fireworks AI API to:

- Understand sentence context
- Translate Indonesian into English
- Extract gesture tokens

---

SignService

Maps gesture keywords into gesture video URLs stored in Supabase.



AIPipeline

Coordinates the entire AI workflow.

```
Speech

↓

AI

↓

Gesture Extraction

↓

Supabase

↓

Video

↓

UI
```



SignVideoPlayer

Automatically plays multiple gesture videos in sequence.



🎯 Why AI?

Traditional systems perform simple keyword matching.

Ahmed-Deaf-11-ASL uses a Large Language Model to understand the meaning of a sentence before selecting the most appropriate sign language gestures.

This enables more accurate gesture selection while preserving the context of natural conversation.



🔮 Future Work

- Real-time streaming conversation
- AI-generated sign language avatar
- Larger BISINDO gesture database
- Offline gesture caching
- Support for multiple sign languages



👥 Team

Team Ahmed-Deaf-11-ASL

Built for the AMD Developer Challenge.



# 📄 License

MIT License
