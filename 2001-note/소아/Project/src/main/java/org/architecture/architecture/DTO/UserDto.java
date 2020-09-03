package org.architecture.architecture.DTO;

public class UserDto {
    private int userId;
    private String userName;

    public UserDto(int userId, String userName) {
        this.userId = userId;
        this.userName = userName;
    }

    public UserDto(String userName) {
        this.userName = userName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                '}';
    }

}
