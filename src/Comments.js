
/*const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, addComments;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    const wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    wrapDiv.style.marginLeft = 0;
    commentText = document.getElementById('newComment').value;
    document.getElementById('newComment').value = '';
    textBox.innerHTML = commentText;
    wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    commentContainer.appendChild(wrapDiv);
    
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
console.log(addComment)*/

const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit_comment')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}