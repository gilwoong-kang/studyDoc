package org.architecture.architecture.Entity;

import org.architecture.architecture.DTO.TransactionDto;

import java.sql.Timestamp;

public class Transaction {
    private int transactionId;
    private Timestamp date;
    private int type;
    private int amount;
    private String transferType;
    private int accountId;
    private String description;

    public Transaction(int transactionId, Timestamp date, int type, int amount, String transferType, int accountId,String description) {
        this.transactionId = transactionId;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.transferType = transferType;
        this.accountId = accountId;
        this.description = description;
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

    public TransactionDto returnDto(){
        return new TransactionDto(transactionId,date,description,type,amount,transferType,accountId);
    }

    @Override
    public String toString() {
        return "Transaction{" +
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
