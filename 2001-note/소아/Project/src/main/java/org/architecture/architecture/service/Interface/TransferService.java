package org.architecture.architecture.Service.Interface;

import org.architecture.architecture.DTO.TransactionDto;
import org.architecture.architecture.Entity.Transaction;
import org.architecture.architecture.Entity.TransferInfo;

import java.util.List;

public interface TransferService {
    public List<TransactionDto> transfer(TransferInfo transferInfo);
}
