const admin_favicon = "/admin-favicon.png";
const admin_logo = "/admin-logo.png";
const book_1 = "/book-1.png";
const book_2 = "/book-2.png";
const book_3 = "/book-3.png";
const book_4 = "/book-4.png";
const book_5 = "/book-5.png";
const book_6 = "/book-6.png";
const book_7 = "/book-7.png";
const book_8 = "/book-8.png";
const find_magic_left = "/find-magic-left.png";
const hero_bg = "/hero-bg.png";
const home_logo = "/home-logo.png";
const user = "/user.png";
const home_footer_logo = "/home-footer-logo.png";

export const assets = {
  admin_favicon,
  admin_logo,
  book_1,
  book_2,
  book_3,
  book_4,
  book_5,
  book_6,
  book_7,
  book_8,
  find_magic_left,
  hero_bg,
  home_logo,
  user,
  home_footer_logo,
};

export const homeNav = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Shop",
    url: "/shop",
  },
  {
    id: 4,
    name: "Sellers",
    url: "/sellers",
  },
  {
    id: 5,
    name: "Admin",
    url: "/admin/products",
  },
];

export const slideItem = [
  {
    id: 1,
    img: book_1,
    title: "Thunmanhandiya",
    description: "Mahagamasekara",
  },
  {
    id: 2,
    img: book_2,
    title: "Gamperaliya",
    description: " Martin Wickramasinghe",
  },
  {
    id: 3,
    img: book_3,
    title: "Nectar in a Sieve",
    description: "Kamala Markandaya",
  },
  {
    id: 4,
    img: book_4,
    title: "Adaraneeya Victoria",
    description: "Mohan Raj Madawala",
  },
];

export const magicItem = [
  {
    id: 1,
    num: "800+",
    title: "Book Listing",
  },
  {
    id: 2,
    num: "1K+",
    title: "Registered Members",
  },
  {
    id: 3,
    num: "50+",
    title: "Branch Count",
  },
];

export const shopProducts = [
  {
    id: 1,
    name: "Thunmanhandiya",
    description: "Mahagamasekara",
    category: "Novel",
    img: book_1,
    price: "Rs. 700/=",
    available: "Available across all branches",
  },
  {
    id: 2,
    name: "Manikkawatha",
    description: "Mahinda Prasad Masimbula",
    category: "Translations",
    img: book_6,
    price: "Rs. 900/=",
    available: "Available across all branches",
  },
  {
    id: 3,
    name: "Manjula Wediwardena",
    description: "Manjula Wediwardena",
    category: "Novel",
    img: book_7,
    price: "Rs. 990/=",
    available: "Available in Colombo Branch Only",
  },
  {
    id: 4,
    name: "The Book Thief",
    description: "Markus Zusak",
    category: "Kids’ Stories",
    img: book_8,
    price: "Rs. 1200/=",
    available: "Available in Colombo Branch Only",
  },
  {
    id: 5,
    name: "Gamperaliya",
    description: "Martin Wickramasinghe",
    category: "Novel",
    img: book_2,
    price: "Rs. 700/=",
    available: "Available across all branches",
  },
  {
    id: 6,
    name: "Nectar in a Sieve",
    description: "Kamala Markandaya",
    category: "Translations",
    img: book_3,
    price: "Rs. 900/=",
    available: "Available across all branches",
  },
  {
    id: 7,
    name: "Adaraneeya Victoria",
    description: "Mohan Raj Madawala",
    category: "Novel",
    img: book_4,
    price: "Rs. 990/=",
    available: "Available in Colombo Branch Only",
  },
  {
    id: 8,
    name: "Wassanen Pasuwa",
    description: "Rathna Sri Wijesingha",
    category: "Kids’ Stories",
    img: book_5,
    price: "Rs. 1200/=",
    available: "Available in Colombo Branch Only",
  },
];

export const dataItem = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A novel about following your dreams and destiny.",
    status: "Available",
    genre: "Fiction",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    description: "A practical guide to building good habits.",
    status: "Available",
    genre: "Self Help",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "Learn financial literacy and wealth building.",
    status: "Out Of Stock",
    genre: "Finance",
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description: "Classic book on success and personal achievement.",
    status: "Available",
    genre: "Motivation",
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth and happiness.",
    status: "Available",
    genre: "Finance",
  },
  {
    id: 6,
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    status: "Available",
    genre: "Productivity",
  },
  {
    id: 7,
    title: "Ikigai",
    author: "Héctor García",
    description: "The Japanese secret to a long and happy life.",
    status: "Out Of Stock",
    genre: "Lifestyle",
  },
  {
    id: 8,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description: "A guide to spiritual enlightenment.",
    status: "Available",
    genre: "Spirituality",
  },
  {
    id: 9,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian society.",
    status: "Available",
    genre: "Classic",
  },
  {
    id: 10,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A timeless story of justice and humanity.",
    status: "Available",
    genre: "Classic",
  },
  {
    id: 11,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy adventure.",
    status: "Available",
    genre: "Fantasy",
  },
  {
    id: 12,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "The beginning of the magical Harry Potter series.",
    status: "Available",
    genre: "Fantasy",
  },
  {
    id: 13,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A psychological thriller with shocking twists.",
    status: "Out Of Stock",
    genre: "Thriller",
  },
  {
    id: 14,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind.",
    status: "Available",
    genre: "History",
  },
  {
    id: 15,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A counterintuitive approach to living a good life.",
    status: "Available",
    genre: "Self Help",
  },
  {
    id: 16,
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups and building the future.",
    status: "Available",
    genre: "Business",
  },
  {
    id: 17,
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "How entrepreneurs use innovation to succeed.",
    status: "Available",
    genre: "Business",
  },
  {
    id: 18,
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    status: "Available",
    genre: "Programming",
  },
  {
    id: 19,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    description: "A deep dive into JavaScript fundamentals.",
    status: "Available",
    genre: "Programming",
  },
  {
    id: 20,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description: "A modern introduction to JavaScript programming.",
    status: "Out Of Stock",
    genre: "Programming",
  },
];
