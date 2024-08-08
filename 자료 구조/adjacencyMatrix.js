// 무방향 비가중 인접 행렬

class AdjacencyMatrix {
    constructor(numNodes) {
        this.numNodes = numNodes;
        this.adjMatrix = [];

        // 인점 행렬 초기화
        this.adjMatrix = Array.from(Array(this.numNodes), () => Array(this.numNodes).fill(0))
    }

    addEdge(node1, node2) {
        this.adjMatrix[node1][node2] = 1;
        this.adjMatrix[node2][node1] = 1;
    }

    // TODO: 행렬 거듭제곱하는 메서드 추가하기

}

const graph = new AdjacencyMatrix(4);
console.log(graph.adjMatrix); // [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

graph.addEdge(0, 1); // 0번째 노드와 1번째 노드 연결됨
graph.addEdge(0, 2); // 0번째 노드와 2번째 노드 연결됨
graph.addEdge(1, 3); // 1번째 노드와 3번째 노드 연결됨
graph.addEdge(2, 3); // 2번째 노드와 3번째 노드 연결됨

console.log(graph.adjMatrix);

/*  [
        // 대칭이다!
        [ 0, 1, 1, 0 ],
        [ 1, 0, 0, 1 ],
        [ 1, 0, 0, 1 ],
        [ 0, 1, 1, 0 ]
    ]
 */