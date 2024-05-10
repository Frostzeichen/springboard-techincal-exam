# Installation instructions

## Prerequisites:
1. PHP
	- This application was made using PHP 8.
	- On Arch-based distributions, you can install PHP 8.3 using `sudo pacman -S php`.
		- Alternatively, you can install PHP 8.2 using `sudo pacman -S php-legacy`. Be sure to change all `php` bash commands with `php-legacy` in the next steps.
	- On Ubuntu and Ubuntu-based distributions, you may follow the instructions at https://ubuntu.com/server/docs/how-to-install-and-configure-php for the official installation instructions.
2. Node
	- This application requires Node 14 and above. Was made using Node 21.
	- On Arch-based distributions, you can install Node using `sudo pacman -S nodejs`.
		- If npm does not come with your installation, use `sudo pacman -S npm`.
	- On Ubuntu and other Ubuntu-based distributions, use `sudo apt install nodejs`.
		- If npm does not come with your installation, use `sudo apt install npm`.
3. MySQL (Option 1)
	- On Arch-based distributions, you can install MySQL (aka MariaDB) using `sudo pacman -S mariadb`.
	- On Ubuntu and other Ubuntu-based distributions, use `sudo apt install mysql-server`
4. Dockerized MySQL (Option 2)
	- This application was made using a Dockerized version of MySQL.
	- On Arch-based distributions, you can install Docker using `sudo pacman -Ss docker`.
	- To download the MySQL image, use `docker pull mysql`. More info at https://hub.docker.com/_/mysql for the official image documentation.
	- To create a MySQL container, use `docker run --name <your-database-container-name> -e MYSQL_ROOT_PASSWORD=<your-database-root-user-password> -d -p 127.0.0.1:3306:3306 mysql` and be sure to change the name and root password. Your database should now be usable at port `3306`. Change the second `3306` if you want to use a different port.
5. Database for this application
	- To connect to MySQL from the terminal, use `mysql -u root -p -h 127.0.0.1`.
	- You will be prompted a password. Type in your password.
		- If you do not have a password, remove the `-p` flag from the command.
	- To create a new MySQL database, type `CREATE DATABASE laravel;`. You may change `laravel` with any other name as long as you change the `.env` variable for the database name later on.

## Installation:
1. Clone this repository. Type `git clone https://github.com/Frostzeichen/springboard-technical-exam.git`
2. Update packages. Run the following commands (the order doesn't matter).
	- `npm install` or `npm i`
	- `composer install` or `composer i`
3. Make a `.env` file and copy the contents of `.env.example` into it.
	- Easy way to do it: `cp .env.example .env`.
4. In the `.env` file, scroll to `DB_CONNECTION=mysql` and add your database credentials.
	- For the most part, you will only need to update the `DB_PASSWORD`. If you changed anything else while making the database, update those parts here.
5. Generate an application API key using `php artisan key:generate`.
6. Migrate the database model using `php artisan migrate`.
7. Run the development servers.
	- On a separate console, run `npm run dev` to run the React development server.
	- On another console, run `php artisan serve` to run the Laravel backend server.
	- In other words, you will have three systems running on your development environment:
		- A React development server
		- A Laravel backend server
		- A MySQL database
