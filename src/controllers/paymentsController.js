class PaymentsController {
    async createPayment(req, res) {
        res.status(201).send({ message: "Payment created successfully" });
    }

    async getPayments(req, res) {
        try{
            const payments = await this.paymentsModel.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving payments", error });
        }
    }

    async updatePayment(req, res) {
        res.status(200).send({ message: "Payment updated successfully" });
    }

    async deletePayment(req, res) {
        const { id } = req.params;
        try {
            // Delete payment
            await this.paymentsModel.deletePayment(id);
            res.status(200).json({ message: "Payment deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting payment", error });
        }
    }
}

export default PaymentsController;