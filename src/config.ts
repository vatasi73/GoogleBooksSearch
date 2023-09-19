const KEY = "AIzaSyCKAWfAniJqJkUXkAuS6Y5geeS1-lp5t5o";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const ALL_BOOKS = (
  search: string,
  sort: string,
  category: string,
  loadMore: number
): string =>
  BASE_URL +
  `?q=intitle:${search}${
    category && category !== "all" ? `+subject:${category}` : ""
  }&orderBy=${sort}&key=${KEY}+&startIndex=${loadMore}&maxResults=30`;

export const DETAILS_BOOK = (id: string) =>
  `https://www.googleapis.com/books/v1/volumes/${id}?key=${KEY}`;
