import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * 게시글 목록 가져오기
 * @returns {Promise} - 게시글 데이터
 */
export const getPosts = () => {
    return axios.get(BASE_URL);
};

/**
 * 게시글 생성 (등록)
 * @param {Object} post - 새 게시글 데이터 (title, body, userId)
 * @returns {Promise} - 생성된 게시글 데이터
 */
export const createPost = (post) => {
    return axios.post(BASE_URL, post);
};

/**
 * 게시글 삭제
 * @param {number} id - 삭제할 게시글 ID
 * @returns {Promise} - 삭제 결과
 */
export const deletePost = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};


// 게시글 수정
export const editPost = async (postId, updatedPost) => {
    return await axios.put(`${BASE_URL}/${postId}`, updatedPost);
};