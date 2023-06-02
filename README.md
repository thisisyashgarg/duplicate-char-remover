# Duplicate Character Remover

This project is a web application that allows users to remove duplicate characters from a given string. It provides a user-friendly interface to input a string, visualize the characters as cards, and interactively remove duplicates.

![Homepage](https://res.cloudinary.com/dwwtffefs/image/upload/v1685729441/duplicate-char-remover/Screenshot_2023-06-02_at_11.27.29_PM_tkclfb.png)

![All Cards](https://res.cloudinary.com/dwwtffefs/image/upload/v1685729501/duplicate-char-remover/Screenshot_2023-06-02_at_11.38.50_PM_d4gf16.png)

![Success](https://res.cloudinary.com/dwwtffefs/image/upload/v1685729504/duplicate-char-remover/Screenshot_2023-06-02_at_11.38.59_PM_pjgctx.png)

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v14 or above)
- npm (Node Package Manager)

## Getting Started

Follow the steps below to run the project locally:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/thisisyashgarg/duplicate-char-remover.git
   ```

2. Navigate to the project directory:

   ```
   cd duplicate-character-remover
   ```

3. Install the dependencies using npm:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:1234` to access the application.

## Usage

### Homepage

- On the homepage, you will see an input box where you can enter a string.
- Make sure to enter a non-empty value in the input box.
- Click on the "Submit" button to proceed.

### All Cards Page

- After submitting the string on the homepage, you will be redirected to the AllCards page.
- The AllCards page displays the string and its characters as cards.
- Your goal is to remove all duplicate characters from the deck of cards.
- You can remove a card by clicking on it.
- Once all duplicates are removed, a success message will be displayed, and confetti will appear.
- You can click the "← Homepage" button to go back to the homepage and enter a new string.

## To Do's

- Unit Test Cases
