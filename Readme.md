# FUT Team Builder Application

The **FUT Team Builder** is an interactive web application that allows users to create, position, and manage their dream FIFA Ultimate Team (FUT). With features like tactical formation adherence, chemistry calculation, and dynamic data management, the app ensures a seamless and engaging experience.

---

## Features

### 1. **Dynamic Player Management**
- Add players using a form with fields for:
  - Name
  - Position
  - Rating
  - Statistics
- Manage player cards by editing or deleting them.
- Enforce a maximum of **11 players** in the main team, with extra players in reserve.

---

### 2. **Tactical Formation Integration**
- Supports tactical formations such as:
  - **4-3-3**: GK, CB (x2), LB, RB, CM (x3), LW, RW, ST.
  - **4-4-2**: GK, CB (x2), LB, RB, CM (x2), RM, LM, ST (x2).
- Automatically adjusts player positions based on the selected formation.

---

### 3. **Team Chemistry Calculation**
- Chemistry is dynamically calculated based on:
  - Correct positioning of players (**10 points**).
  - Strong club bonds (**+3 points**).
  - League links with adjacent players (**+4 points per pair**).
  - Nationality links (**+1 point**).
- Chemistry score is normalized to a **0-100 scale**.
- Visual indicators for strong/weak links between players.

---

### 4. **LocalStorage Data Persistence**
- Save team setups automatically using **localStorage**.
- Load saved data upon reopening the application.

---

### 5. **Interactive UI Features**
- Drag-and-drop functionality to rearrange players dynamically.
- Real-time updates when switching formations.
- Responsive design to ensure compatibility with laptops, tablets, and mobile devices.

---

## User Stories

### 1. **Create a Team of 11 Players**
- **As a user**, I want to add players dynamically with a maximum limit of 11 for the main team.
  - **Acceptance Criteria:**
    - Add players through a form with fields for name, position, and rating.
    - Modify or delete players as needed.
    - Validate input fields to ensure accuracy.

### 2. **Adapt Formation Automatically**
- **As a user**, I want the app to adjust player positions based on the selected tactical formation.
  - **Acceptance Criteria:**
    - Choose from predefined formations (e.g., 4-4-2, 4-3-3).
    - Automatically adjust positions to match the selected formation.

### 3. **Calculate Chemistry Score**
- **As a user**, I want the chemistry score to reflect player relationships and positioning.
  - **Acceptance Criteria:**
    - Chemistry is calculated dynamically.
    - Strong/weak links are visually highlighted.

### 4. **Save and Load Team Data**
- **As a user**, I want my team data to be saved and recovered automatically.
  - **Acceptance Criteria:**
    - Save team data to **localStorage**.
    - Load saved data upon reopening the application.

---

## Technologies Used

- **HTML** and **CSS** (or frameworks like **Tailwind CSS** or **Bootstrap**).
- **Vanilla JavaScript** for DOM manipulation and functionality.
- **localStorage** for saving and retrieving team data.