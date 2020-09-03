package org.architecture.architecture.DTO;

public class AccountDto {
    private int accountId;
    private int type;   // 0 = 입금, 1 = 출금
    private String name;
    private int balance; // 잔액
    private int userId;

    public AccountDto(int accountId, int type,String name, int balance, int userId) {
        this.accountId = accountId;
        this.type = type;
        this.name = name;
        this.balance = balance;
        this.userId = userId;
    }

    public AccountDto(int accountId) {
        this.accountId = accountId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "AccountDto{" +
                "accountId=" + accountId +
                ", type=" + type +
                ", name='" + name + '\'' +
                ", balance=" + balance +
                ", userId=" + userId +
                '}';
    }
}
