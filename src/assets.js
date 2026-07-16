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
    name: "The Alchemist",
    description: "A novel about following your dreams and destiny.",
    status: "Available",
    price: "15.99",
    category: "Fiction",
    bgColor: "bg-col-10/75",
  },
  {
    id: 2,
    name: "Atomic Habits",
    description: "A practical guide to building good habits.",
    status: "Available",
    price: "18.50",
    category: "Self Help",
  },
  {
    id: 3,
    name: "Rich Dad Poor Dad",
    description: "Learn financial literacy and wealth building.",
    status: "Out of Stock",
    price: "16.99",
    category: "Finance",
    bgColor: "bg-col-10/75",
  },
  {
    id: 4,
    name: "Think and Grow Rich",
    description: "Classic book on success and personal achievement.",
    status: "Available",
    price: "14.99",
    category: "Motivation",
  },
  {
    id: 5,
    name: "The Psychology of Money",
    description: "Timeless lessons on wealth and happiness.",
    status: "Available",
    price: "20.00",
    category: "Finance",
    bgColor: "bg-col-10/75",
  },
  {
    id: 6,
    name: "Deep Work",
    description: "Rules for focused success in a distracted world.",
    status: "Available",
    price: "19.99",
    category: "Productivity",
  },
  {
    id: 7,
    name: "Ikigai",
    description: "The Japanese secret to a long and happy life.",
    status: "Out of Stock",
    price: "17.50",
    category: "Lifestyle",
    bgColor: "bg-col-10/75",
  },
  {
    id: 8,
    name: "The Power of Now",
    description: "A guide to spiritual enlightenment.",
    status: "Available",
    price: "18.99",
    category: "Spirituality",
  },
  {
    id: 9,
    name: "1984",
    description: "A dystopian novel by George Orwell.",
    status: "Available",
    price: "13.99",
    category: "Classic",
    bgColor: "bg-col-10/75",
  },
  {
    id: 10,
    name: "To Kill a Mockingbird",
    description: "A timeless story of justice and humanity.",
    status: "Available",
    price: "15.50",
    category: "Classic",
  },
  {
    id: 11,
    name: "The Hobbit",
    description: "An epic fantasy adventure by J.R.R. Tolkien.",
    status: "Available",
    price: "21.99",
    category: "Fantasy",
    bgColor: "bg-col-10/75",
  },
  {
    id: 12,
    name: "Harry Potter and the Sorcerer's Stone",
    description: "The beginning of the magical Harry Potter series.",
    status: "Available",
    price: "24.99",
    category: "Fantasy",
  },
  {
    id: 13,
    name: "The Silent Patient",
    description: "A psychological thriller with shocking twists.",
    status: "Out of Stock",
    price: "19.50",
    category: "Thriller",
    bgColor: "bg-col-10/75",
  },
  {
    id: 14,
    name: "Sapiens",
    description: "A brief history of humankind.",
    status: "Available",
    price: "22.99",
    category: "History",
  },
  {
    id: 15,
    name: "The Subtle Art of Not Giving a F*ck",
    description: "A counterintuitive approach to living a good life.",
    status: "Available",
    price: "18.75",
    category: "Self Help",
    bgColor: "bg-col-10/75",
  },
  {
    id: 16,
    name: "Zero to One",
    description: "Notes on startups and building the future.",
    status: "Available",
    price: "17.99",
    category: "Business",
  },
  {
    id: 17,
    name: "The Lean Startup",
    description: "How entrepreneurs use innovation to succeed.",
    status: "Available",
    price: "20.99",
    category: "Business",
    bgColor: "bg-col-10/75",
  },
  {
    id: 18,
    name: "Clean Code",
    description: "A handbook of agile software craftsmanship.",
    status: "Available",
    price: "34.99",
    category: "Programming",
  },
  {
    id: 19,
    name: "You Don't Know JS",
    description: "A deep dive into JavaScript fundamentals.",
    status: "Available",
    price: "29.99",
    category: "Programming",
    bgColor: "bg-col-10/75",
  },
  {
    id: 20,
    name: "Eloquent JavaScript",
    description: "A modern introduction to JavaScript programming.",
    status: "Out of Stock",
    price: "27.99",
    category: "Programming",
  },
];
