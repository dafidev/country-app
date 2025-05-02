# 🌍 Country Search App

This application was developed using [Angular CLI](https://github.com/angular/angular-cli) (version 19.2.7). It allows users to search for countries by their capital city using the public [REST Countries API](https://restcountries.com/). The app displays a list of matching countries and manages UI states like loading and error using **signals**.

## 🚀 Main Features

- Search countries by capital with a reactive input.
- Display country information such as flag, population, and capital.
- Handles loading and error states reactively.
- Modern architecture using standalone components, signals, and nested routing.
- Styling powered by TailwindCSS.

## 🧑‍💻 Local Development

To start a local development server:

```bash
ng serve
```

Open your browser at `http://localhost:4200/`. The app will reload automatically when you modify the source files.

## 📁 Folder Structure

- `src/app/country/` → Components and services for country search.
- `src/app/shared/` → Reusable components like search input and country list.
- `src/app/services/country.service.ts` → HTTP service using `HttpClient` to query the external API.
- `src/app/mappers/` → Functions to map REST models to internal models.

## 🧪 Running Tests

To run unit tests:

```bash
ng test
```

## 🛠 Building

To compile the project:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 📚 Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [REST Countries API](https://restcountries.com/)
