const express = require('express')
const router = express.Router()
const mysql = require("mysql2/promise");

router.post('/employe', async (req, res, next) => {
    const { fullName, position, sortPriority, originalImg, previewImg, imgPosition, mobPreviewImg, comments } = req.body // Список параметров

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD
        });
        const [rows, fields] = await connection.execute('INSERT INTO `employees`(`full_name`, `position`, `sort_priority`, `original_img`, `preview_img`, `img_position`, `mob_preview_img`) VALUES (?,?,?,?,?,?,?)', [fullName, position, sortPriority, originalImg, previewImg, imgPosition, mobPreviewImg]);

        await connection.execute('INSERT INTO `comments`(`comment`, `employe_id`) VALUES (?,?)', [comments[0], rows.insertId]);
        await connection.execute('INSERT INTO `comments`(`comment`, `employe_id`) VALUES (?,?)', [comments[1], rows.insertId]);

        connection.close();
        res.status(200).json({ status: 200, msg: 'ok' })

    } catch (error) {
        next(error)
    }
})

router.post('/employe/edit', async (req, res, next) => {
    const { fullName, position, sortPriority, originalImg, previewImg,imgPosition, mobPreviewImg, comments, id } = req.body // Список параметров

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD
        });

        await connection.execute('UPDATE `employees` SET `full_name`=?,`position`=?,`sort_priority`=?,`preview_img`=?,`original_img`=?,`img_position`=?, `mob_preview_img`=? WHERE id = ?', [fullName, position, sortPriority, previewImg, originalImg,imgPosition, mobPreviewImg, id]);

        await connection.execute('DELETE FROM `comments` WHERE employe_id = ?', [id]);
        await connection.execute('INSERT INTO `comments`(`comment`, `employe_id`) VALUES (?,?)', [comments[0], id]);
        await connection.execute('INSERT INTO `comments`(`comment`, `employe_id`) VALUES (?,?)', [comments[1], id]);

        connection.close();
        res.status(200).json({ status: 200, msg: 'ok' })

    } catch (error) {
        next(error)
    }
})

router.get('/employe/:id', async (req, res, next) => {
    const { id } = req.params // Список параметров

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD
        });

        const [rows, fields] = await connection.execute('SELECT * FROM `employees` WHERE `employees`.`id` = ?', [id]);
        const [comments, fileds2] = await connection.execute('SELECT * FROM `comments`  WHERE `employe_id` = ?', [id]);

        connection.close();
        res.status(200).json({ status: 200, user: rows[0], comments })

    } catch (error) {
        next(error)
    }
})

router.get('/employes', async (req, res, next) => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD
        });

        const [rows, fields] = await connection.execute('SELECT * FROM `employees` ORDER BY `sort_priority` ASC');
        connection.close();
        res.status(200).json({ status: 200, users: rows })

    } catch (error) {
        next(error)
    }
})

router.get('/employe/remove/:id', async (req, res, next) => {
    const { id } = req.params // Список параметров

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD
        });

        await connection.execute('DELETE FROM `employees` WHERE id = ?', [id]);
        await connection.execute('DELETE FROM `comments` WHERE id = ?', [id]);
        connection.close();
        res.status(200).json({ status: 200 })

    } catch (error) {
        next(error)
    }
})


module.exports = router
