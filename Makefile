build:
	git pull && \
	cd frontend && \
	npm run build && \
	sudo systemctl restart nginx && \
	sudo systemctl restart gunicorn
