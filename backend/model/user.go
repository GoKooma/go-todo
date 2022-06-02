package model

import (
	"time"

	"gorm.io/gorm"
)

// User struct
type User struct {
	gorm.Model
	User_id    int       `gorm:"unique_index;not null"`
	Username   string    `gorm:"unique_index;not null" json:"username"`
	Email      string    `gorm:"unique_index;not null" json:"email"`
	Password   string    `gorm:"not null" json:"password"`
	Updated_on time.Time `gorm:"autoUpdateTime"`
	Last_login time.Time `gorm:"autoUpdateTime"`
	Updated_by string    `gorm:"not null" json:"name"`
}
