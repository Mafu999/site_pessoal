document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.getElementById('new-post-btn');
    const newPostForm = document.getElementById('new-post-form');
    const savePostBtn = document.getElementById('save-post-btn');
    const postsDiv = document.getElementById('posts');

    newPostBtn.addEventListener('click', () => {
        newPostForm.classList.toggle('hidden');
    });

    savePostBtn.addEventListener('click', () => {
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;

        if (postTitle && postContent) {
            const newPost = document.createElement('article');
            const postTitleElem = document.createElement('h2');
            const postContentElem = document.createElement('p');

            postTitleElem.textContent = postTitle;
            postContentElem.textContent = postContent;

            newPost.appendChild(postTitleElem);
            newPost.appendChild(postContentElem);

            postsDiv.appendChild(newPost);

            // Limpar o formulário
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';

            // Esconder o formulário
            newPostForm.classList.add('hidden');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
