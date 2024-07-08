body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: white;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    width: 80%;
    height: 70%;
    border: 1px solid #ccc;
}

.left-panel {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #ccc;
}

#display {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
}

.info {
    font-size: 1.2rem;
}

.right-panel {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.key, .control {
    width: 80px;
    height: 80px;
    background-color: #ccc;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.key:hover, .control:hover {
    background-color: #bbb;
}

