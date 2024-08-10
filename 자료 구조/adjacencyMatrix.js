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
    powMatrix() {
        // 반복은 해당 인접행렬의 numNodes의 제곱만큼 진행함
        for(let i = 0; i < Math.pow(this.numNodes, 2); i++) {

        }
    }




    // ***************************************************************
    // **********************    테스트 코드   **************************
    // ***************************************************************

    matricesAreEqual(matrix1, matrix2) {
        // 행의 길이가 같지 않으면 false
        if (matrix1.length !== matrix2.length) return false;

        for (let i = 0; i < matrix1.length; i++) {
            // 열의 길이가 같지 않으면 false
            if (matrix1[i].length !== matrix2[i].length) return false;

            for (let j = 0; j < matrix1[i].length; j++) {
                // 각 요소의 값이 같지 앟으면 false
                if (matrix1[i][j] !== matrix2[i][j]) return false;
            }
        }

        return true;
    }

    test() {
        let expectedInitialMatrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        console.assert(this.matricesAreEqual(this.adjMatrix, expectedInitialMatrix), "올바르지 않음!");

        this.addEdge(0, 1);
        this.addEdge(0, 2);
        this.addEdge(1, 3);
        this.addEdge(2, 3);

        let expectedMatrixAfterAddingEdges = [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [0, 1, 1, 0]
        ];
        console.assert(this.matricesAreEqual(this.adjMatrix, expectedMatrixAfterAddingEdges), "올바르지 않음");
    }
}

const graph = new AdjacencyMatrix(4);
console.log(graph.adjMatrix); // [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

graph.addEdge(0, 1); // 0번째 노드와 1번째 노드 연결됨
graph.addEdge(0, 2); // 0번째 노드와 2번째 노드 연결됨
graph.addEdge(1, 3); // 1번째 노드와 3번째 노드 연결됨
graph.addEdge(2, 3); // 2번째 노드와 3번째 노드 연결됨

graph.test();

console.log(graph.adjMatrix);

/*  [
        // 대칭이다!
        [ 0, 1, 1, 0 ],
        [ 1, 0, 0, 1 ],
        [ 1, 0, 0, 1 ],
        [ 0, 1, 1, 0 ]
    ]
 */