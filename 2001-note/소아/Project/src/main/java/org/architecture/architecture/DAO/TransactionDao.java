package org.architecture.architecture.DAO;

import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.TransactionDto;

import java.util.List;

public interface TransactionDao {
    public void insert(TransactionDto transactionDto);
    public void delete(TransactionDto transactionDto);
    public TransactionDto select(TransactionDto transactionDto);
    public List<TransactionDto> selectAccount(AccountDto accountDto);
    public void update(TransactionDto transactionDto);
}
