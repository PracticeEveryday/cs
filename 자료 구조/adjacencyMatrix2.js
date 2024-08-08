// 방향, 가중 인접 행렬
// 노드 Class
class Node {
    constructor(id) {
        this.id = id;
        this.edges = [];
    }
}

// 간선 Class
class Edge {
    constructor(nodeId, weight) {
        this.nodeId = nodeId;
        this.weight = weight // 가중치
    }
}


class AdjacencyMatrix{
    constructor() {
        this.nodes = {};
    }

    addNode(id) {
        this.nodes[id] = new Node(id);
    }

    addEdge(fromNode, toNode, weight) {
        this.nodes[fromNode].edges.push(new Edge(toNode, weight));
    }

    getTableData() {
        // 노드와 간선을 포함하는 테이블 데이터 생성
        const tableData = [];
        for (const nodeId in this.nodes) {
            const node = this.nodes[nodeId];
            tableData.push({
                Node: nodeId,
                Edges: node.edges.map(e => `to ${e.nodeId} (weight: ${e.weight})`).join(', ')
            });
        }
        return tableData;
    }

}

const adjacencyMatrix = new AdjacencyMatrix();
adjacencyMatrix.addNode("A");
adjacencyMatrix.addNode("B");
adjacencyMatrix.addNode("C");
adjacencyMatrix.addNode("D");

adjacencyMatrix.addEdge('A', 'B', 2);
adjacencyMatrix.addEdge('A', 'C', 1);
adjacencyMatrix.addEdge('A', 'D', 3);
adjacencyMatrix.addEdge('B', 'D', 4);

console.table(adjacencyMatrix.nodes);
console.table(adjacencyMatrix.getTableData());