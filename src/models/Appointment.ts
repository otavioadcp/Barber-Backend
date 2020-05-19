import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import User from './User'
@Entity('appointments') 
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    provider_id: string;

    //Cria o relacionamento de Usuarios com os Appointments
    //Onde Varios(Many) Appointments para um Usuario(One)
    //Depois faz o JOIN dizendo qual Coluna sera a responsavel pela relacao

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id'})
    provider: User;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //Removido pois com o uso do TypeOrm, o constructor eh criado automatico quando criamos uma Entity do typeorm
    // constructor({ provider, date }: Omit<Appointment, 'id'>) {
    //     this.id = uuid();
    //     this.provider = provider;
    //     this.date = date;
    // }
}

export default Appointment;
