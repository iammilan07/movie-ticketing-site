FROM node:19.5.0-alpine
# WORKDIR /nc/HR.Client/ClientApp/modules/hrms
WORKDIR /app
# COPY /nc/HR.Client/ClientApp/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms-appraisal/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms-appraisal-e2e/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms-data/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms-geofencing/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms-roles/package*.json ./ /nc/HR.Client/ClientApp/modules/hrms-ui/package*.json ./ /nc/HR.Client/ClientApp/modules/ui/package*.json ./
COPY package.json ./
RUN npm install
COPY . .
# ENV REACT_APP_API_URL=http://your-api-url
RUN npm run build  
EXPOSE 80
CMD ["npm", "start"] 