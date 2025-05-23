const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");
const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener("click", () => {
    const name = bookmarkNameInput.value.trim();
    const url = bookmarkUrlInput.value.trim();

    if(!name || !url){
        alert("Please enter both name and URL.");
        return;
    }
    else if(!url.startsWith("http://") && !url.startsWith("https://")){
      alert("Please enter a valid URL starting with http:// or https://");
      return;
    }
    else{
        addBookmark(name, url);
        saveBookmark(name, url);
        bookmarkNameInput.value = "";
        bookmarkUrlInput.value = "";
    }
})

function addBookmark(name, url){
    const li = document.createElement("li");
    const link = document.createElement("a");
    const removeBtn = document.createElement("button");

    link.href = url;
    link.textContent = name;
    link.target = "_blank";

    console.log(name)
    console.log(url)
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        bookmarkList.removeChild(li);
        removeBookmarkFromStorage(name, url)
    });

    li.appendChild(link);
    li.appendChild(removeBtn);

    bookmarkList.appendChild(li);

}


function getBookmarksFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmark(name, url){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.push({name, url});
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks(){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.map((el) => {
        addBookmark(el.name, el.url);
    })
}

function removeBookmarkFromStorage(name, url){
    let bookmarks = getBookmarksFromStorage();
    bookmarks = bookmarks.filter(bookmark => bookmark.name !== name || bookmark.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}