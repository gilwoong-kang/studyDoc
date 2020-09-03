package org.architecture.architecture.Service.Interface;

import org.architecture.architecture.DTO.TransactionDto;

import java.util.Date;
import java.util.List;

public interface InquiryDetailService {
    public List<TransactionDto> inquiry(int accountId, Date time, int type);
}
