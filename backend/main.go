package main

import (
	"go-todo/backend/database"
	"go-todo/backend/router"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())

	database.ConnectDB()

	app.Static("/", "../frontend/build")
	router.SetupRoutes(app)
	app.Static("*", "../frontend/build/index.html")

	log.Fatal(app.Listen(":3000"))
}
