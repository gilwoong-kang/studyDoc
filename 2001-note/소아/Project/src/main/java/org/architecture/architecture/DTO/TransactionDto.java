package org.architecture.architecture.DTO;

import java.sql.Timestamp;

public class TransactionDto {
    private int transactionId;
    private Timestamp date;
    private String description;
    private int type;
    private int amount;
    private String transferType;
    private int accountId;

    public TransactionDto(int transactionId, Timestamp date, String description, int type, int amount, String transferType, int accountId) {
        this.transactionId = transactionId;
        this.date = date;
        this.description = description;
        this.type = type;
        this.amount = amount;
        this.transferType = transferType;
        this.accountId = accountId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getTransferType() {
        return transferType;
    }

    public void setTransferType(String transferType) {
        this.transferType = transferType;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    @Override
    public String toString() {
        return "TransactionDto{" +
                "transactionId=" + transactionId +
                ", date=" + date +
                ", type=" + type +
                ", amount=" + amount +
                ", transferType='" + transferType + '\'' +
                ", accountId=" + accountId +
                ", description='" + description + '\'' +
                '}';
    }
}
