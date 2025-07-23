import { ComponentLayer } from "@/components/ui/ui-builder/types";

export const INTRODUCTION_LAYER = {
    "id": "introduction",
    "type": "div",
    "name": "Introduction",
    "props": {
      "className": "h-full bg-background px-4 flex flex-col gap-6 min-h-screen",
      "data-group": "core"
    },
    "children": [
      {
        "type": "span",
        "children": "Introduction",
        "id": "1MnLSMe",
        "name": "Text",
        "props": {
          "className": "text-4xl"
        }
      },
      {
        "id": "JKiqXGV",
        "type": "Markdown",
        "name": "Markdown",
        "props": {},
        "children": "**UI Builder solves the fundamental problem of UI creation tools: they ignore your existing React component library and force you to rebuild from scratch.**\n\nUI Builder is a shadcn/ui package that adds a Figma‑style editor to your own product, letting non‑developers compose pages, emails, dashboards, and white‑label views with the exact React components you already ship.\n\nLayouts are saved as plain JSON for easy versioning and can be rendered instantly with dynamic data, allowing:\n\n- your marketing team to update a landing page without waiting on engineering\n- a customer to tweak a branded portal with their own content and branding  \n- a product manager to modify email templates but parts of the content is dynamic for each user\n- add a visual \"head\" to your headless CMS, connecting your content API with your component library"
      },
      {
        "id": "eR9CoTQ",
        "type": "div",
        "name": "div",
        "props": {},
        "children": [
          {
            "id": "1FmQvr5",
            "type": "Badge",
            "name": "Badge",
            "props": {
              "variant": "default",
              "className": "rounded rounded-b-none"
            },
            "children": [
              {
                "id": "itgw5T6",
                "type": "span",
                "name": "span",
                "props": {},
                "children": "Live Demo"
              }
            ]
          },
          {
            "id": "3EYD3Jj",
            "type": "div",
            "name": "div",
            "props": {
              "className": "border border-primary shadow-lg rounded-b-sm rounded-tr-sm overflow-hidden"
            },
            "children": [
              {
                "id": "h8a96fY",
                "type": "iframe",
                "name": "iframe",
                "props": {
                  "src": "/examples/basic",
                  "title": "UI Builder Basic Example",
                  "className": "aspect-square md:aspect-video"
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "cUFUpBr",
        "type": "Markdown",
        "name": "Markdown",
        "props": {},
        "children": "## How UI Builder Works\n\nUI Builder empowers you to visually construct and modify user interfaces by leveraging your own React components. Here's how it works:\n\n**🧩 Component-Driven Foundation**\\\nOperates on your existing React components. You provide a `componentRegistry` detailing which components are available in the editor.\n\n**🎨 Layer-Based Canvas**\\\nThe UI is constructed as a tree of \"layers.\" Each layer represents a component instance that users can visually add, remove, reorder, and nest on an interactive canvas.\n\n**⚙️ Dynamic Props Editing**\\\nEach component uses a Zod schema to automatically generate a properties panel, allowing users to configure component instances in real-time.\n\n**🔗 Variable-Driven Dynamic Content**\\\nVariables transform static designs into dynamic, data-driven interfaces. Bind component properties to typed variables for personalization, theming, and reusable templates.\n\n**📦 Flexible State Management**\\\nBy default, the editor's state persists in local storage. For production apps, provide `initialLayers` and use the `onChange` callback to persist state to your backend.\n\n**⚡ React Code Generation**\\\nExport visually designed pages as clean, readable React code that correctly references your components.\n\n**🚀 Runtime Variable Resolution**\\\nWhen rendering pages with `LayerRenderer`, provide `variableValues` to override defaults with real data from APIs, databases, or user input."
      },
      {
        "id": "understanding-variables",
        "type": "Markdown",
        "name": "Markdown",
        "props": {},
        "children": "## Understanding Variables\n\n**Variables are the key to creating dynamic, data-driven interfaces.** Instead of hardcoding static values, variables allow you to bind component properties to dynamic data that changes at runtime.\n\n**Variable Types:**\n- **String**: For text content, names, descriptions, etc.\n- **Number**: For counts, ages, prices, quantities, etc.\n- **Boolean**: For feature flags, visibility toggles, active states, etc.\n\n**Powerful Use Cases:**\n- **Personalized content** that adapts to user data\n- **Reusable templates** that work across different contexts\n- **Multi‑tenant applications** with customized branding per client\n- **A/B testing** and feature flags through boolean variables\n- **Content management** where non‑technical users can update dynamic content"
      },
      {
        "id": "key-benefits",
        "type": "Markdown",
        "name": "Markdown",
        "props": {},
        "children": "## Key Benefits\n\n**🎯 One‑step Installation**\\\nGet up and running with a single `npx shadcn@latest add …` command.\n\n**🎨 Figma‑style Editing**\\\nIntuitive drag‑and‑drop canvas, properties panel, and live preview.\n\n**⚡ Full React Code Export**\\\nGenerate clean, type‑safe React code that matches your project structure.\n\n**🔗 Runtime Variable Binding**\\\nCreate dynamic templates with string, number, and boolean variables—perfect for personalization, A/B testing, or multi‑tenant branding.\n\n**🧩 Bring Your Own Components**\\\nUse your existing React component library—no need to rebuild from scratch.\n\n**💾 Flexible Persistence**\\\nControl how and when editor state is saved, with built‑in local storage support or custom database integration."
      },
      {
        "id": "live-examples",
        "type": "Markdown",
        "name": "Markdown",
        "props": {},
        "children": "## Live Examples\n\nExplore different UI Builder features with these interactive examples:\n\n**🎨 [Basic Editor](/examples/basic)** - Simple drag‑and‑drop interface with basic components\n\n**🔧 [Full Featured Editor](/examples/editor)** - Complete editor with all panels and advanced features\n\n**📄 [Static Renderer](/examples/renderer)** - See how pages render without the editor interface\n\n**🔗 [Variables in Action](/examples/renderer/variables)** - Dynamic content with runtime variable binding"
      },
      {
        "id": "next-steps",
        "type": "Markdown",
        "name": "Markdown",
        "props": {},
        "children": "## Next Steps\n\nReady to get started?\n\n1. **Quick Start** - Install and set up your first UI Builder\n2. **Components Intro** - Learn about the component registry system\n3. **Variables** - Create dynamic, data-driven interfaces\n4. **Custom Components** - Add your own React components to the editor"
      }
    ]
  } as const satisfies ComponentLayer;