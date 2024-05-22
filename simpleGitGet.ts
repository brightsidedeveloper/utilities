import fs from 'fs'
import simpleGit from 'simple-git'
import path from 'path'

const git = simpleGit()

const filePath = path.join(__dirname, 'yeah-this-is-real.ts')

// Step 1: Generate the file

const data = fs.readFileSync(filePath, 'utf8')

console.log(data)
