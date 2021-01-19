import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  title: string;
  @Column('varchar')
  content: string;
  @CreateDateColumn('time')
  createdAt: Date;
  @UpdateDateColumn('time')
  updateAt: Date;
  @ManyToOne(type => User, user => user.posts)
  author: User;
  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment;
}
