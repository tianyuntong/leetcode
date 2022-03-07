



// 设计一个函数，传入两个DOM节点，找出它们的最近的父节点
// 详解如 ./png

//  遍历实现版本
function findComponentParentNode1(node1, node2) {
  // 这里用oNode2是一样的
  // 如果某个节点包含另一个节点，直接返回，否则不断往上查找
  while (!node1.contains(node2)) {
    node1 = node1.parentNode
  }
  return node1
}

// 递归实现版本
function findComponentParentNode2(node1, node2) {
  if (node1.contains(node2)) return node1
  if (node2.contains(node1)) return node2
  // 判断情况3，从其中一个节点往上查找，会找到一个共同的祖先节点
  findComponentParentNode2(node1.parentNode, node2)
}


// contains方法 如果A元素包含B元素，则返回true，否则返回false
// firefox 不支持次方法
