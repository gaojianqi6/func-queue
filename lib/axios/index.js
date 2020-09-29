class AxiosQueue {
  static getInstance() {
    if (!AxiosQueue.instance) {
      AxiosQueue.instance = new AxiosQueue();
    }
    return AxiosQueue.instance;
  }
}

export default AxiosQueue;