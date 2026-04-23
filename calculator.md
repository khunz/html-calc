# Calculator Project

> 💡 Don't forget to commit early & often! You can reference the **Commit Messages** lesson for guidance.

---

## Core Requirements

### 1. Basic Math Functions

Create and test functions for the four basic operators in your browser's console:

- `add`
- `subtract`
- `multiply`
- `divide`

### 2. Operation Variables

A calculator operation consists of **a number, an operator, and another number** (e.g. `3 + 5`). Create three variables — one for each part — which you'll use to update the display later.

### 3. The `operate` Function

Create a function `operate` that takes an **operator** and **two numbers**, then calls the appropriate math function on them.

### 4. Basic HTML Layout

Build a calculator UI with:

- Buttons for each **digit** and **operator** (including `=`)
- A **display** area (fill with dummy numbers for now)
- A **clear** button

_(Don't worry about making buttons functional yet.)_

### 5. Digit Button Logic

Create functions that:

- Update a number variable when digit buttons are clicked
- Reflect that value on the display

### 6. Make It Work

Wire everything together:

- Store the **first number**, **operator**, and **second number** as the user inputs them
- When `=` is pressed, call `operate()` with the stored values
- Update the display with the result

> ⚠️ This is the hardest part — figuring out how to store all values and call `operate` correctly. Take your time with the logic!

---

## Gotchas (Bugs to Watch For)

### 🔢 Chained Operations

Your calculator should only evaluate **one pair of numbers at a time**:

| Step | Input      | Display                   |
| ---- | ---------- | ------------------------- |
| 1    | Enter `12` | `12`                      |
| 2    | Press `+`  | `12`                      |
| 3    | Enter `7`  | `7`                       |
| 4    | Press `-`  | `19` _(evaluates 12 + 7)_ |
| 5    | Enter `1`  | `1`                       |
| 6    | Press `=`  | `18` _(evaluates 19 - 1)_ |

### 🔁 Other Bugs to Fix

- **Long decimals** — Round results so they don't overflow the display
- **Pressing `=` too early** — Guard against missing numbers or operator
- **Pressing Clear** — Must fully reset all stored data
- **Divide by zero** — Show a snarky error message; don't crash!
- **Consecutive operators** — If `+` is pressed twice, don't evaluate; just use the last operator entered
- **New digit after result** — Should start a fresh calculation, not append to the result

---

## Extra Credit

- [ ] **Decimal support** — Add a `.` button; prevent multiple decimals (e.g. `12.3.56`)
- [ ] **Backspace button** — Let users undo their last input
- [ ] **Keyboard support** — Allow full keyboard interaction
