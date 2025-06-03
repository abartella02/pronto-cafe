run-docker:
	@echo "Starting Docker Container..."
	docker compose up

run-build-docker:
	@echo "Building Docker Container..."
	docker compose up --build

run-local:
	@echo "Starting frontend and backend..."
	@cd frontend && npm run dev & \
	cd backend && python manage.py runserver & \
	wait
