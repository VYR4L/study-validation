class PaymentsModel {
    constructor(database) {
      this.database = database;
    }
  
    async addPayment(paymentData) {
      const { user_id, value, receipt, photo, observation, payment_date } = paymentData;
      const query = `
        INSERT INTO payments (user_id, value, receipt, photo, observation, payment_date)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const params = [user_id, value, receipt, photo, observation, payment_date];
      return this.database.run(query, params);
    }
  
    async findPaymentsByUserId(userId) {
      const query = `
        SELECT * FROM payments WHERE user_id = ?
      `;
      return this.database.all(query, [userId]);
    }
  
    async updatePaymentStatus(paymentId, status) {
      const query = `
        UPDATE payments SET checked_payment = ? WHERE id = ?
      `;
      return this.database.run(query, [status, paymentId]);
    }
  }
  
  export default PaymentsModel;