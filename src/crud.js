//  Todo  {
//   아이디(required),
//   내용(required),
//   완료여부(required),
//   카테고리(required),
//   태그들(optional),
// }

/** Todo Item 
 * @constructor
 * @param {!number} id - 개별적 부여 id(필수)
 * @param {!string} text - todo 텍스트(필수)
 * @param {!string} category - 카테고리(필수)
 * @param {?Array} tag - 태그(선택)
 * @param {!boolean} complete - 완료 여부(항상 false)
 * 
 */
const Todo = {
  id, text, category, tags, complete
}

/**새로운 todo 항목을 생성한다. 
 * 
 * @param {!number} id - 개별적 부여 id(필수)
 * @param {!string} text - todo 텍스트(필수)
 * @param {!string} category - 카테고리(필수)
 * @param {?Array.<String>} tag - 태그(선택)
 */
function createTodo(id, text, category, tag){
}

/**해당하는 id에 대한 todo 객체를 반환힌다.
 * 
 * @param {number} id 
 * @return {@link Todo} 
 */
function readTodoById(id){
}

/**해당하는 category에 대한 모든 Todo를 전달한다. 
 * 
 * @param {string} id 
 * @return {Array.<Object>}
 */
function readTodoByCategory(category){
}

/**해당하는 text를 포함한 모든 todo목록을 리턴한다.
 * 
 * @param {string} text
 * @return {Array.<Object>} 
 */
function readTodoByText(text){
}

/**해당하는 tag를 포함한 모든 todo 목록을 리턴한다.
 * 
 * @param {number} id 
 * @return {@link Todo} 
 */
function readTodoByTag(tag){
}

/** 생성되어있는 todo에 대해 변경사항을 업데이트 하는 함수. 동일한 id에 대해 업데이트한다. 
 * 
 * @param {number} id - 필수
 * @param {string} text - 선택 
 * @param {string} category -선택
 * @param {Array} tag - 선택 
 * @param {boolean} complete - 완료된 사항인지? 필수 (t/f)
 * 
 * @retrun {boolean} 성공 여부 반환
 */
function updateTodo(id, text, category, complete){
}

/** id가 같은 아이템을 삭제하는 함수
 * @param {number} id
 */
function deleteTodo(id){
}
