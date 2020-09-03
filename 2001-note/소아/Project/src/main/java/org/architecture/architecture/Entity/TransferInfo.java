package org.architecture.architecture.Entity;

public class TransferInfo {
    private int accountId;
    private int inquiryAccountId;
    private int amount;
    private String description;

    public TransferInfo(int accountId, int inquiryAccountId, int amount, String description) {
        this.accountId = accountId;
        this.inquiryAccountId = inquiryAccountId;
        this.amount = amount;
        this.description = description;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public int getInquiryAccountId() {
        return inquiryAccountId;
    }

    public void setInquiryAccountId(int inquiryAccountId) {
        this.inquiryAccountId = inquiryAccountId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "TransferInfo{" +
                "accountId=" + accountId +
                ", inquiryAccountId=" + inquiryAccountId +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                '}';
    }
}
